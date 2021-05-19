import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Themed } from 'theme-ui'

import Layout from './layout'
import SEO from './seo'

const Doc = ({ data: { doc } }) => {
  const headingTitle = doc.headings[0] && doc.headings[0].value
  const ThemedH1 = Themed.h1

  return (
    <Layout coverImage={doc.frontmatter.coverImage}>
      <SEO
        title={doc.title || headingTitle}
        description={doc.description || doc.excerpt}
      />
      <ThemedH1>{doc.title}</ThemedH1>
      <MDXRenderer>{doc.body}</MDXRenderer>
    </Layout>
  )
}

export default Doc
