import React from "react"
import styled from "styled-components"
import SocialMedia from "./SocialMedia"

const FooterContainer = styled.div`
  background-color: ${props =>
    props.colorMode === "dark" ? "var(--dark)" : "var(--light)"};
  color: ${props =>
    props.colorMode === "dark" ? "var(--light)" : "var(--dark)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15vh 20vw;
  margin-bottom: 0;
  text-align: center;
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;
  @media (max-width: 700px) {
    padding: 10vh 4vw;
  }
`

const Footer = ({ colorMode }) => {
  return (
    <FooterContainer
      className={colorMode === "dark" ? "fadeOutIn" : "fadeIn"}
      colorMode={colorMode}
    >
      <p style={{ marginBottom: "5vh" }}>
        © {new Date().getFullYear()}, All code, vector graphics, icons & assets
        designed by Jordan Winslow (except the cow & svg patterned backgrounds)
        <br />
        Programmed from scratch with React, GraphQL, GSAP &
        <a href="https://www.gatsbyjs.org">&nbsp;Gatsby</a>
      </p>
      <br />
      <SocialMedia colorMode={colorMode} />
    </FooterContainer>
  )
}

export default Footer
