import React from "react"
import styled from "styled-components"
import SocialMedia from "./SocialMedia"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.colorMode === "dark" ? "var(--primaryDark)" : "var(--primaryLight)"};
  color: var(--light);
  width: 40%;
  height: 550px;
  margin: auto;
  padding: 7vh 5vw;
  h1 {
    margin: 0;
  }
  p {
    color: var(--light);
  }
  @media (max-width: 1550px) {
    width: 45%;
    padding: 5vh 5vw;
  }
  @media (max-width: 1350px) {
    width: 50%;
  }
  @media (max-width: 1200px) {
    width: 70%;
    height: 480px;
  }
  @media (max-width: 790px) {
    width: 100%;
    height: 600px;
  }
`

const ContactInfo = ({ heading, paragraph, colorMode }) => {
  return (
    <Container colorMode={colorMode}>
      <h1>{heading}</h1>
      <div>{paragraph}</div>
      <SocialMedia colorMode={colorMode} />
    </Container>
  )
}

export default ContactInfo
