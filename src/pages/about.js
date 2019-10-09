import React, { Suspense, Fragment } from "react"
import SEO from "../components/Seo"
import Header from "../components/Header"
import DesktopNav from "../components/DesktopNav"
import Loading from "../images/Loading.svg"

const PostTitle = React.lazy(() => import("../components/PostTitle"))
const BlogPost = React.lazy(() => import("../components/BlogPost"))

export default () => {
  const isServerRendered = typeof window === "undefined"
  return (
    <Fragment>
      <Header />
      <DesktopNav />
      <SEO title="About | Front-End Responsive Web & UI Designer Specializing in React" />
      {!isServerRendered && (
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
              <img
                src={Loading}
                alt="Animated Dark Pink Square Grid Loading Animation"
              />
            </div>
          }
        >
          <PostTitle
            heading="Coming Soon!"
            subHeading="This Website is Still in-Development"
          />
          <BlogPost
            content={
              /*TODO: Replace content with dynamically loaded markdown files */
              <div>
                <p>Business Contact: admin@jordanwinslow.me</p>
                <p>Github: https://github.com/JordanWinslow</p>
                <p>Twitter: https://twitter.com/JordanDWinslow</p>
                <p>Instagram: https://instagram.com/JordanDWinslow/</p>
              </div>
            }
          />
        </Suspense>
      )}
    </Fragment>
  )
}
