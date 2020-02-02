import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tag } from "../components/Tag"

import "./index.css"

const Card = ({ tags = [], title = "", desc = "", link = "" }) => {
  return (
    <article
      className={` w-64 h-64 m-6 p-5 max-w-sm rounded overflow-hidden ${
        link ? "hover:shadow-2xl" : ""
      } shadow-lg`}
    >
      <header>
        <p className="font-bold text-xl mb-2">
          {link ? (
            <Link style={{ boxShadow: `none` }} to={link}>
              {title}
            </Link>
          ) : (
            title
          )}
        </p>
      </header>
      {link ? (
        <Link style={{ boxShadow: `none` }} to={link}>
          <div className="text-gray-700 text-base">{desc}</div>
        </Link>
      ) : (
        <div className="text-gray-700 text-base">{desc}</div>
      )}
      <div>
        {tags.map(tag => {
          return (
            <Link
              style={{ boxShadow: `none`, marginTop: "10px" }}
              to={`/tags/${tag}`}
              key={tag}
            >
              <Tag key={tag}>{tag}</Tag>
            </Link>
          )
        })}
      </div>
    </article>
  )
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const tags = data.allMdx.group || []

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />

        <div className="">
          <h2>To Try</h2>

          <ul className="flex flex-row overflow-x-scroll">
            <li>
              <Card
                title="Carbonara Stracciatella"
                desc={
                  <>
                    <p>Italian Parmesan Soup</p>
                    <p className="italic">"Where Cooking Begins" page 130</p>
                  </>
                }
              />
            </li>
            <li>
              <Card
                title=" BLTs with Bacon Fat Fried Eggs"
                desc={<p className="italic">"Where Cooking Begins" page 118</p>}
              />
            </li>
            <li>
              <Card
                title=" Slow Cooked Dozen Egg Frittata"
                desc={
                  <>
                    <p>Blonde Frittata With Honey Nut Squash and Kale</p>
                    <p className="italic">"Where Cooking Begins" page 116</p>
                  </>
                }
              />
            </li>
            <li>
              <Card
                title="Pasta with Cauliflower, Sausage, and Bread Crumbs"
                desc={<p className="italic">"Where Cooking Begins" page 140</p>}
              />
            </li>
            <li>
              <Card title="Dutch Oven Bread" />
            </li>
            <li>
              <Card title="Dutch Oven Roast" />
            </li>
          </ul>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:pr-12 lg:w-1/3 md:w-1/2 ">
              <h2>Tags</h2>
              <ul>
                {tags.slice(0, 9).map(({ fieldValue, totalCount }) => {
                  const tag = fieldValue
                  const tagPath = `/tags/`
                  return (
                    <li className="m-5" key={tagPath + tag}>
                      <article>
                        <header>
                          <Link
                            style={{ boxShadow: `none` }}
                            to={`/tags/${tag}`}
                          >
                            <Tag>
                              {tag} ({totalCount})
                            </Tag>
                          </Link>
                        </header>
                      </article>
                    </li>
                  )
                })}
                <li className="mt-3">
                  <article>
                    <header>
                      <p>
                        <Link
                          className="text-xl"
                          style={{ boxShadow: `none` }}
                          to="/tags"
                        >
                          All Tags ({tags.length})
                        </Link>
                      </p>
                    </header>
                  </article>
                </li>
              </ul>
            </div>

            <div>
              <h2>Recent Recipes</h2>
              <ul className="lg:flex lg:flex-row lg:w-full md:w-1/2 lg:flex-wrap">
                {posts.slice(0, 9).map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <li className="lg:1/5 lg:p-5" key={node.fields.slug}>
                      <article className="mb-6 p-5 max-w-sm rounded overflow-hidden hover:shadow-2xl shadow-lg">
                        <header>
                          <p className="font-bold text-xl mb-2">
                            <Link
                              style={{ boxShadow: `none` }}
                              to={node.fields.slug}
                            >
                              {title}
                            </Link>
                          </p>
                        </header>
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          <p className="text-gray-700 text-base">
                            {node.excerpt.slice(19, node.excerpt.length)}
                          </p>
                        </Link>
                        <div>
                          {node.frontmatter.tags.map(tag => {
                            return (
                              <Link
                                style={{ boxShadow: `none`, marginTop: "10px" }}
                                to={`/tags/${tag}`}
                                key={tag}
                              >
                                <Tag key={tag}>{tag}</Tag>
                              </Link>
                            )
                          })}
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
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
            tags
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
