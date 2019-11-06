import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>

            <h2>Tags</h2>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                margin: 0,
              }}
            >
              {this.props.data.mdx.frontmatter.tags.map((tag, index, array) => {
                return (
                  <li
                    key={tag}
                    style={{
                      border: "none",
                    }}
                  >
                    <Link to={`tags/${tag}`}>{` ${tag}${
                      index === array.length - 1 ? "" : ", "
                    } `}</Link>
                  </li>
                )
              })}
            </ul>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
