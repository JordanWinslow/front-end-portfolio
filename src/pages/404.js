import React from "react"

import Layout from "../components/MainLayout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 align="center">NOT FOUND</h1>
    <p align="center">
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
  </Layout>
)

export default NotFoundPage
