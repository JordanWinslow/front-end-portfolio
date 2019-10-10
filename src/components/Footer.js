import React from "react"
import SocialMedia from "./SocialMedia"
const Footer = ({ colorMode }) => {
  return (
    <footer
      className="fadeIn"
      style={{
        backgroundColor: colorMode === "dark" ? "var(--light)" : "var(--dark",
        color: colorMode === "dark" ? "var(--dark)" : "var(--light",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "15vh 20vw",
        marginBottom: 0,
        textAlign: "center",
        position: "relative",
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      <p style={{ marginBottom: "5vh" }}>
        © {new Date().getFullYear()}, All code, vector graphics, icons & assets
        designed by Jordan Winslow (except the cow & svg patterned backgrounds)
        <br />
        Programmed from scratch with React, GraphQL, GSAP &
        <a href="https://www.gatsbyjs.org">&nbsp;Gatsby</a>
      </p>
      <SocialMedia colorMode={colorMode} />
    </footer>
  )
}

export default Footer
