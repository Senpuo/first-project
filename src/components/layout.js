/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

export const NETs = () => {
   return <div>look</div>
}


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query  {
      site {
    siteMetadata {
      author
      description
      title
    }
  }

    }
  `)

let text = [ 1, 3, 2]
console.log(text);
 text = [0,0,0]
console.log(text);
const author  = data.site.siteMetadata.author

  return (
   <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <p>{text}</p>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.lhex.dl">{author}</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
