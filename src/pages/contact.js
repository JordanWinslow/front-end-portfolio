import React, { Suspense, Fragment } from "react"
import styled from "styled-components"
import DesktopNav from "../components/DesktopNav"
import MobileNav from "../components/MobileNav"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Loading from "../images/Loading.svg"

const ContactInfo = React.lazy(() => import("../components/ContactInfo"))

const PageContent = styled.div`
margin-bottom: 10vh;
`

const Spacer = styled.div`
@media (max-width: 1200px) {
  margin-top: 110px;
}
`

export default () => {
  const isServerRendered = typeof window === "undefined"
  const text = (
    <Fragment>
      <p>
        I’m currently seeking a great Front-End Designer & Developer position
        with a company who wants to improve the world!
      </p>
      <p>
        I am also available for freelance work. Click the icons below to be
        redirected to my social media, email or phone number!
      </p>
    </Fragment>
  )
  return (
    <PageContent>
      <MobileNav />
      <Spacer>
        <Header />
      </Spacer>
      <DesktopNav location="bottom" />
      <SEO title="Contact & Social Media | Front-End Responsive Web & UI Developer Specializing in React" />
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
          <ContactInfo heading="Let’s Be Friends" paragraph={text} />
        </Suspense>
      )}
    </PageContent>
  )
}
