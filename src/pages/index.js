import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import avatarImg from '../images/avatar.jpg';
import Icons from '../components/icons';

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
        <Icons/>
      </footer>
    </section>
  </Layout>
)

export default IndexPage
