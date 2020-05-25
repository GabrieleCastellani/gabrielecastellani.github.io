// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogArchive = ({ data, location }: PageProps<Data>) => {
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  }

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let d = ""
  let dateHeader = undefined
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        let newdate = new Date(node.frontmatter.date)
        let shortdate = newdate.getFullYear() + " " + months[newdate.getMonth()]
        if (shortdate !== d) {
          dateHeader = shortdate
          d = shortdate
        } else {
          dateHeader = undefined
        }
        return (
          <article key={node.fields.slug}>
            {dateHeader ? <h3>{dateHeader}</h3> : ""}

            <header>
              <h3>
                <Link className="default" to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <h4
                style={{
                  margin: "0px",
                  // fontWeight: 600,
                  paddingTop: "10px",
                  fontSize: "1.1em",
                }}
              >
                {newdate.toLocaleDateString("it-it")}
              </h4>
            </header>
            <section>
              <p
                style={{ marginTop: "10px" }}
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogArchive

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
