import React from "react"
import PropTypes from "prop-types"

import '../assets/css/gatsby-specific.css';
import "../assets/css/main.css";

const Layout = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        {children}
        <footer id="footer">
          <ul class="copyright">
            <li>&copy; PDTD</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
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
