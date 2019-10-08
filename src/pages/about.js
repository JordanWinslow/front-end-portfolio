import React, { Suspense, Fragment } from "react"
import SEO from "../components/Seo"
import Header from "../components/Header"
import DesktopNav from "../components/DesktopNav"
import Loading from "../images/Loading.svg"

const PostTitle = React.lazy(() => import("../components/PostTitle"))

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
          {/*<BlogList />*/}
        </Suspense>
      )}
    </Fragment>
  )
}
