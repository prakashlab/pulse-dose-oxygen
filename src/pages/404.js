import React from 'react'

import Layout from '../gatsby-theme-documentation/components/layout'
import SEO from '../gatsby-theme-documentation/components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content">
      <div className="innerContent">
        <h1>Not Found</h1>
        <p>
          Oops, you just hit a route that doesn&#39;t exist!
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
