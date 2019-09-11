import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import avatarImg from '../images/avatar.jpg';
import SocialLinks from '../components/socialLinks';

const IndexPage = () => {

  const { metaJson } = useStaticQuery(
    graphql`
      query {
        metaJson {
          subtitle
          title
        }
      }
    `);

  return (
    <Layout>
      <SEO title="Home" />
      <section id="main">
        <header>
          <span className="avatar"><img src={avatarImg} alt="" /></span>
          <h1>{metaJson.title}</h1>
          <p>{metaJson.subtitle}</p>
        </header>
        <footer>
          <SocialLinks/>
        </footer>
      </section>
    </Layout>
  )
}

export default IndexPage
