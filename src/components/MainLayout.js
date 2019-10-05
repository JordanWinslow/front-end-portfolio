import React, { useState } from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import Footer from "./Footer"
import LightBulb from "./LightBulb"
import "./layout.css"

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
const Layout = ({ children, isHomePage, theme = "light" }) => {
  const [colorMode, setColorMode] = useState(theme) // SET PAGE THEME TO LIGHT MODE ON FIRST LOAD.
  return (
    <>
      <Color theme={colorMode} />
      <DesktopNav colorMode={colorMode} isHomePage={isHomePage} />
      <MobileNav colorMode={colorMode} />
      <LightBulb colorMode={colorMode} setColorMode={setColorMode} />
      <div id="PageContent">
        <main>{children}</main>
        {/*<Footer />*/}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
