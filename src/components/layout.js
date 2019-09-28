import React, { useState } from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Header from "./header"
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
const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useState("light") // SET PAGE THEME TO LIGHT MODE ON FIRST LOAD.
  return (
    <>
      <Color theme={colorMode} />
      <Header colorMode={colorMode} />
      <button
        onClick={e => setColorMode(colorMode === "dark" ? "light" : "dark")}
      >
        💡
      </button>
      <div
        style={{
          margin: "0 auto",
          maxWidth: 700,
          padding: "0 1.5rem",
        }}
        id="Content"
      >
        <main>{children}</main>
        <footer
          className="bgSecondaryDark"
          style={{
            marginBottom: 0,
            textAlign: "center",
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          © {new Date().getFullYear()}, Built with love by Jordan Winslow
          <br />
          Powered by React, GraphQL &
          <a href="https://www.gatsbyjs.org">&nbsp;Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
