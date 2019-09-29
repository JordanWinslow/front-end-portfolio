import React, { Suspense } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Loading from "../images/Loading.svg"

const PostTitle = React.lazy(() => import("../components/PostTitle"))
const BlogPost = React.lazy(() => import("../components/BlogPost"))

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Suspense
        fallback={
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={Loading} />
          </div>
        }
      >
        <PostTitle
          heading="FRONT-END WEB DEVELOPMENT BLOG"
          subHeading="JavaScript, React, GraphQL & Friends"
        />
        {/*<BlogList />*/}
        <BlogPost
          content={
            /*TODO: Replace content with dynamically loaded markdown files */
            <div>
              BOOM. Dark mode toggle implemented. Now you can click the
              lightbulb to switch color schemes along with a fading animation.
              <br />
              <br />
              I'm balling out of control.
            </div>
          }
        />
      </Suspense>
      {/*<div className="bgPrimaryLight">This is a success message</div>
    <div className="bgSecondaryLight">This is a warning message</div>*/}
    </Layout>
  )
}

export default IndexPage
