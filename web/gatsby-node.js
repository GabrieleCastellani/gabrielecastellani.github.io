const path = require(`path`)
var slugify = require("slugify")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                alias
                categories
                tags
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const tags = result.data.tagsGroup.group

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Make tag pages
  tags.forEach(tag => {
    console.log(tag.fieldValue)
    createPage({
      path: `/tags/${slugify(tag.fieldValue)}/`,

      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const d = node.frontmatter.date.slice(0, 10).split("-")
    const value =
      d[0] + "/" + d[1] + "/" + d[2] + "/" + slugify(node.frontmatter.title) // createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
