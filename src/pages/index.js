import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const tags = data.allMarkdownRemark.group || []

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <h2>Recent Recipes</h2>
        <ul>
          {posts.slice(0, 9).map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li key={node.fields.slug}>
                <article>
                  <header>
                    <h3 style={{ margin: 0, marginBottom: rhythm(0.5) }}>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                  </header>
                </article>
              </li>
            )
          })}
        </ul>
        <Link style={{ boxShadow: `none` }} to={`/tags/`}>
          <h2>Tags</h2>
        </Link>
        <ul>
          {tags.slice(0, 9).map(({ fieldValue, totalCount }) => {
            const tag = fieldValue
            const tagPath = `/tags/${tag}`
            return (
              <li key={tagPath}>
                <article>
                  <header>
                    <h3 style={{ margin: 0, marginBottom: rhythm(0.5) }}>
                      <Link style={{ boxShadow: `none` }} to={tagPath}>
                        {tag} ({totalCount})
                      </Link>
                    </h3>
                  </header>
                </article>
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
