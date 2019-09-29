import React from "react"

const Footer = () => {
  return (
    <footer
      className="bgSecondaryDark fadeIn"
      style={{
        marginBottom: 0,
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      © {new Date().getFullYear()}, All code, vector graphics & assets designed
      by Jordan Winslow (except the cow)
      <br />
      Powered by React, GraphQL &
      <a href="https://www.gatsbyjs.org">&nbsp;Gatsby</a>
    </footer>
  )
}

export default Footer
