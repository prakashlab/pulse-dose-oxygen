const crypto = require(`crypto`)
const path = require(`path`)
const { joinPath } = require(`gatsby-core-utils`)
const traverse = require(`traverse`)
const { find, isString } = require(`lodash`)

let basePath
let contentPath

const DocTemplate = require.resolve('./src/templates/doc')

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })

  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })

  return result
}

// Adapted from gatsby-remark-relative-images
slash = (path) => {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);

  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, `/`);
}
findMatchingFile = (src, files, options) => {
  const result = find(files, (file) => {
    const staticPath = slash(path.join(options.staticFolderName, src));
    return slash(path.normalize(file.absolutePath)).endsWith(staticPath);
  });
  if (!result) {
    throw new Error(
      `No matching file found for src "${src}" in static folder "${options.staticFolderName}". Please check static folder name and that file exists at "${options.staticFolderName}${src}". This error will probably cause a "GraphQLDocumentError" later in build. All converted field paths MUST resolve to a matching file in the "static" folder.`
    );
  }
  return result;
}

exports.onPreBootstrap = (_, themeOptions) => {
  basePath = themeOptions.basePath || `/`
  contentPath = themeOptions.contentPath || `docs`
}

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes([
    `
      type Frontmatter @infer {
        title: String!
        coverImage: File @fileByRelativePath
      }
    `,
    schema.buildObjectType({
      name: `Docs`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!`, },
        description: { type: `String`, },
        frontmatter: `Frontmatter!`,
        slug: { type: `String!`, },
        headings: {
          type: `[MdxHeadingMdx!]`,
          resolve: mdxResolverPassthrough(`headings`),
        },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
      extensions: {
        infer: true,
      }
    })
  ])
}

exports.onCreateNode = async ({ node, actions, getNode, getNodesByType, createNodeId }) => {
  const { createNode, createParentChildLink, createRedirect } = actions

  const isReadme = name => /readme/i.test(name)
  const isIndexPath = name => name === 'index' || isReadme(name)

  const toOriginalDocsPath = node => {
    const { dir } = path.parse(node.relativePath)
    const fullPath = [
      basePath,
      dir,
      node.name
    ]
    return joinPath(...fullPath).replace(/\\+/g, ``)
  }
  const toDocsPath = node => {
    const { dir } = path.parse(node.relativePath)
    const fullPath = [
      basePath,
      dir,
      !isIndexPath(node.name) && node.name
    ].filter(Boolean)
    return joinPath(...fullPath).replace(/\\+/g, ``)
  }

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === contentPath) {
    const slug = toDocsPath(fileNode)

    // Redirect file/path/readme to file/path/ in order to handle
    // potential links that are meant to work with GitHub-style index
    // pages.
    if (isReadme(fileNode.name)) {
      createRedirect({
        fromPath: toOriginalDocsPath(fileNode),
        toPath: toDocsPath(fileNode),
        isPermanent: true
      })
    }

    const frontmatter = node.frontmatter
    const title = frontmatter.title
    const description = frontmatter.description

    // Convert relative image paths frontmatter
    // Code adapted from gatsby-remark-relative-images, because it only works on
    // Mdx type and not the custom Docs type
    const files = getNodesByType(`File`);
    const directory = path.dirname(node.fileAbsolutePath);
    // Deeply iterate through frontmatter data for absolute paths
    traverse(frontmatter).forEach(function (value) {
      if (!isString(value)) return;

      if (!path.isAbsolute(value) || !path.extname(value)) return;

      const paths = this.path.reduce((acc, current) => {
        acc.push(acc.length > 0 ? [acc, current].join('.') : current);
        return acc;
      }, []);

      const file = findMatchingFile(value, files, {staticFolderName: ''});
      const newValue = path.relative(directory, file.absolutePath);
      this.update(newValue);
    });

    const fieldData = { title, description, slug, frontmatter }
    const mdxDocId = createNodeId(`${node.id} >>> Docs`)

    await createNode({
      ...fieldData,
      id: mdxDocId,
      parent: node.id,
      children: [],
      internal: {
        type: `Docs`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Docs`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxDocId) })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      docs: allDocs {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const docs = result.data.docs.nodes

  docs.forEach((doc, index) => {
    const previous = index === docs.length - 1 ? null : docs[index + 1]
    const next = index === 0 ? null : docs[index - 1]
    const { slug } = doc

    createPage({
      path: slug,
      component: DocTemplate,
      context: {
        ...doc,
        previous,
        next,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}
