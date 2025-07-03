import React from "react"
import '../styles/styles.scss'
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Kitchen from "../components/kitchen"

const KitchenPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Emily Yu - Kitchen</title>
      <link rel="canonical" href="https://emilybelleyu.github.io/Portfolio/kitchen" />
    </Helmet>
    <Layout>
      <Kitchen />
    </Layout>
  </div>
)

export default KitchenPage
