import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="PageHeader" style={{ marginBottom: "3rem" }}>
      <center>
        <h1>FRONT-END WEB DEVELOPMENT BLOG</h1>
        <h2>JavaScript, React, GraphQL & Friends</h2>
      </center>
    </div>
    <div>
      BOOM. Dark mode toggle implemented. Now you can click the lightbulb to switch color schemes along with a fading animation.<br/><br/>I'm balling out of control.
    </div>
    {/*<div className="bgPrimaryLight">This is a success message</div>
    <div className="bgSecondaryLight">This is a warning message</div>*/}
  </Layout>
)

export default IndexPage
