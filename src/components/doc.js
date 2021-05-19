import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Themed } from 'theme-ui'

import Layout from './layout'
import SEO from './seo'

const Doc = ({ data: { doc } }) => {
  const headingTitle = doc.headings[0] && doc.headings[0].value
  const ThemedRoot = Themed.root

  return (
    <Layout header={doc.slug === '/'}>
      <SEO
        title={doc.title || headingTitle}
        description={doc.description || doc.excerpt}
      />
      <Themed.h1>{doc.title}</Themed.h1>
      <MDXRenderer>{doc.body}</MDXRenderer>
    </Layout>
  )
}

export default Doc
