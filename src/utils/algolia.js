const pageQuery = `{
    pages: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/pages/" },
      }
    ) {
      edges {
        node {      
          fields {
            slug
          }
          objectID: id
          frontmatter {
            title
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`

const postQuery = `{
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          objectID: id
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
            tags
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [

  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `recipes`,
    settings,
  },
]

module.exports = queries
