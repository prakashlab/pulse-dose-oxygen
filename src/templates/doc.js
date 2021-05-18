import React from 'react'
import { graphql } from "gatsby"

import Doc from '../components/doc'

const Document = ({ data }) => (
  <Doc data={data} />
)

export default Document

export const pageQuery = graphql`
  query($id: String!) {
    doc: docs(id: { eq: $id }) {
      id
      slug
      title
      description
      excerpt
      body
      headings {
        value
      }
    }
  }
`
