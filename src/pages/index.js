import React from "react"
import '../styles/styles.scss'
import { Helmet } from "react-helmet"

//Import Components
import Layout from "../components/layout"
// import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
// import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Emily Yu</title>
      <link rel="canonical" href="https://emilybelleyu.github.io/Portfolio/" />
    </Helmet>
    <Layout>
    <Banner />
    <AboutBlurb />
    </Layout>
  </div>
)

export default IndexPage
