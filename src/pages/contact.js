import React, { Suspense, Fragment } from "react"
import DesktopNav from "../components/DesktopNav"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Loading from "../images/Loading.svg"

const PostTitle = React.lazy(() => import("../components/PostTitle"))
const BlogPost = React.lazy(() => import("../components/BlogPost"))

export default () => {
  const isServerRendered = typeof window === "undefined"
  return (
    <Fragment>
      <Header />
      <DesktopNav />
      <SEO title="Contact | Front-End Responsive Web & UI Designer Specializing in React" />
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
              <center>
                <div>
                  <p>
                    Business Contact:{" "}
                    <a href="mailto:admin@jordanwinslow.me?subject=Hello%20Jordan!">
                      <b>admin@jordanwinslow.me</b>
                    </a>
                  </p>
                  <p>
                    Github:{" "}
                    <a href="https://github.com/JordanWinslow">
                      <b>https://github.com/JordanWinslow</b>
                    </a>
                  </p>
                  <p>
                    Twitter:{" "}
                    <a href="https://twitter.com/JordanDWinslow">
                      <b>https://twitter.com/JordanDWinslow</b>
                    </a>
                  </p>
                  <p>
                    Instagram:{" "}
                    <a href="https://instagram.com/JordanDWinslow/">
                      <b>https://instagram.com/JordanDWinslow/</b>
                    </a>
                  </p>
                </div>
              </center>
            }
          />
        </Suspense>
      )}
    </Fragment>
  )
}
