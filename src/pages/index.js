import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const tags = data.allMdx.group || []

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />

        <div
          className="nes-container with-title"
          style={{ marginBottom: "60px" }}
        >
          <h2 className="title">Recent Recipes</h2>
          <ul className="nes-list is-circle">
            {posts.slice(0, 9).map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <li key={node.fields.slug}>
                  <article>
                    <header>
                      <h3 style={{ margin: 0, marginBottom: "3%" }}>
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h3>
                    </header>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        <div
          className="nes-container with-title"
          style={{ marginBottom: "60px" }}
        >
          <h2 className="title">Tags</h2>
          <ul className="nes-list is-circle">
            {tags.slice(0, 9).map(({ fieldValue, totalCount }) => {
              const tag = fieldValue
              const tagPath = `/tags/`
              return (
                <li key={tagPath}>
                  <article>
                    <header>
                      <p style={{ margin: 0, marginBottom: "3%" }}>
                        <Link
                          style={{ boxShadow: `none` }}
                          to={`${tagPath}/${tag}`}
                        >
                          {tag} ({totalCount})
                        </Link>
                      </p>
                    </header>
                  </article>
                </li>
              )
            })}
            <li>
              <article>
                <header>
                  <p style={{ margin: 0, marginBottom: "3%" }}>
                    <Link style={{ boxShadow: `none` }} to="tags">
                      All Tags ({tags.length})
                    </Link>
                  </p>
                </header>
              </article>
            </li>
          </ul>
        </div>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
