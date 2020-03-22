import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    {edges.map(edge => (
      <div key={edge.node.id}>
        <Link to={edge.node.frontmatter.path}>
          {edge.node.frontmatter.title}
        </Link>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
