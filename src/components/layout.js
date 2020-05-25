import React from "react"
import { Link, StaticQuery } from "gatsby"
import ProfilePageHeader from "./ProfilePageHeader"
import IndexNavbar from "./IndexNavbar"
var slugify = require("slugify")

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  return (
    <div id="root">
      <IndexNavbar />
      <ProfilePageHeader />

      {/* <header>{header}</header> */}
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <main>{children}</main>
            </div>
            <div className="col-4">
              <Link className="h3 text-info" to={`/tags/`}>
                Tags:
              </Link>
              <br />
              <br />
              <StaticQuery
                query={graphql`
                  query Tags {
                    allMarkdownRemark(limit: 2000) {
                      group(field: frontmatter___tags) {
                        fieldValue
                        totalCount
                      }
                    }
                  }
                `}
                render={data => (
                  <>
                    {data.allMarkdownRemark.group.map(tag => (
                      <li key={tag.fieldValue}>
                        <Link
                          className="text-info"
                          to={`/tags/${slugify(tag.fieldValue)}/`}
                        >
                          {tag.fieldValue} ({tag.totalCount})
                        </Link>
                      </li>
                    ))}
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <center>
        <footer>© {new Date().getFullYear()}, Gabriele Castellani</footer>
      </center>
    </div>
  )
}

export default Layout
