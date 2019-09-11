import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import '../assets/css/gatsby-specific.css';
import "../assets/css/main.css";

const Layout = ({ children }) => {

  const { metaJson } = useStaticQuery(
    graphql`
      query {
        metaJson {
          title
        }
      }
    `);

  return (
    <>
      <div id="wrapper">
        {children}
        <footer id="footer">
          <ul className="copyright">
            <li>&copy; {metaJson.title}</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
