import React from "react"

import Layout from "../components/BlogLayout"
import MobileNav from "../components/MobileNav"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <MobileNav colorMode={colorMode} alwaysDisplay={true} />{" "}
    {/*This page has no desktop navigation since it is a full-width page. So I set alwaysDisplay to true for the mobile nav component*/}
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
