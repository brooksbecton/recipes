import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { FavoriteButton } from "../components/FavoriteButton"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tag } from "../components/Tag"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <div>
          <FavoriteButton slug={this.props.pageContext.slug} />
        </div>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />

          <article>
            <header>
              <h1 className="text-green-900">{post.frontmatter.title}</h1>

              <div className="flex flex-row w-auto">
                <h2 className="text-base text-green-900 m-0 mr-4 pt-1 ">
                  Tags
                </h2>
                <ul className="flex flex-row">
                  {this.props.data.mdx.frontmatter.tags.map(
                    (tag, index, array) => {
                      return (
                        <li
                          className="mb-3 mr-4"
                          key={tag}
                          style={{
                            border: "none",
                          }}
                        >
                          <Link to={`/tags/`}>
                            <Tag>{tag}</Tag>
                          </Link>
                        </li>
                      )
                    }
                  )}
                </ul>
              </div>
            </header>
            <hr className='text-green-900'/>
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
        </Layout>
      </div>
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
