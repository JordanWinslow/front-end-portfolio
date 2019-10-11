import React, { Suspense, Fragment, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import DesktopNav from "../components/DesktopNav"
import MobileNav from "../components/MobileNav"
import SEO from "../components/Seo"
import Header from "../components/Header"
import LightBulb from "../components/LightBulb"
import Loading from "../images/Loading.svg"
// DARK MODE IMPLEMENTATION
const Color = createGlobalStyle`
  body {
    color: ${props =>
      props.theme === "dark" ? "var(--light)" : "var(--dark)"};
    background-color: ${props =>
      props.theme === "dark" ? "var(--dark)" : "var(--light)"};
      transition: .8s ease-out;
  }
  `
const ContactInfo = React.lazy(() => import("../components/ContactInfo"))

const PageContent = styled.div`
  margin-bottom: 10vh;
`
/* on mobile the header image should drop down 110px to make room 
for the navigation bar */
const Spacer = styled.div`
  @media (max-width: 1200px) {
    margin-top: 110px;
  }
`

export default () => {
  const [colorMode, setColorMode] = useState("dark") // SET PAGE THEME TO LIGHT MODE ON FIRST LOAD.

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
      <Color theme={colorMode} />
      <LightBulb colorMode={colorMode} setColorMode={setColorMode} />
      <MobileNav colorMode={colorMode} />
      <Spacer>
        <Header colorMode={colorMode} />
      </Spacer>
      <DesktopNav location="bottom" colorMode={colorMode} />
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
          <ContactInfo
            heading="Let’s Be Friends"
            paragraph={text}
            colorMode={colorMode}
          />
        </Suspense>
      )}
    </PageContent>
  )
}
