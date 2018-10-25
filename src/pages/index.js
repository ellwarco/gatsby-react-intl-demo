import React from 'react'
import { graphql } from 'gatsby'

import PageAbout from '../components/PageAbout'
import { messagesFromNodes } from '../utils'

const IndexPage = ({ data }) => (
  <PageAbout
    link="/settings"
    messages={messagesFromNodes(data.allKeyValue.edges)}
  />
)

export default IndexPage

// dynamic query for all translations with keys prefixed
// with 'onboard.welcome.'
export const query = graphql`
  query($language: String!) {
    allKeyValue(
      filter: {
        file: { relativeDirectory: { eq: "ooni-wui" }, name: { eq: $language } }
        key: { regex: "/^onboard.welcome/" }
      }
    ) {
      edges {
        node {
          key
          value
        }
      }
    }
  }
`
