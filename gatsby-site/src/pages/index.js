import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import avatarImg from '../images/avatar.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="main">
      <header>
        <span class="avatar"><img src={avatarImg} alt="" /></span>
        <h1>PDTD</h1>
        <p>Senior Psychonautics Engineer</p>
      </header>
      <footer>
        <ul class="icons">
          <li><a href="#" class="icon brands fa-twitter">Twitter</a></li>
          <li><a href="#" class="icon brands fa-instagram">Instagram</a></li>
          <li><a href="#" class="icon brands fa-facebook-f">Facebook</a></li>
        </ul>
      </footer>
    </section>
  </Layout>
)

export default IndexPage
