import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                ...scale(0.8),
                marginBottom: rhythm(1.5),
              }}
            >
              {post.frontmatter.title}
            </h1>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                margin: 0,
              }}
            >
              {this.props.data.markdownRemark.frontmatter.tags.map(
                (tag, index, array) => {
                  return (
                    <li
                      key={tag}
                      style={{
                        border: "none",
                        paddingLeft: index === 0 ? 0 : 10,
                      }}
                    >
                      <Link to={`tags/${tag}`}>{` ${tag}${
                        index === array.length - 1 ? "" : ", "
                      } `}</Link>
                    </li>
                  )
                }
              )}
            </ul>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
