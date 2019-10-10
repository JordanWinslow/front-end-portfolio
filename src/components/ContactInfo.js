import React from "react"
import styled from "styled-components"
import twitter from "../images/icon-twitter.svg"
import facebook from "../images/icon-facebook.svg"
import github from "../images/icon-github.svg"
import email from "../images/icon-email.svg"
import phone from "../images/icon-phone.svg"
import behance from "../images/icon-behance.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.colorMode === "dark"
      ? "var(--secondaryLight)"
      : "var(--primaryDark)"};
  color: ${props =>
    props.colorMode === "dark" ? "var(--dark)" : "var(--light)"};
  width: 40%;
  height: 550px;
  margin: auto;
  padding: 7vh 5vw;
  h1 {
    margin: 0;
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

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    margin-bottom: 0;
    transition-duration: 0.4s;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    align-items: center;
    justify-items: center;
    img {
      width: 40px;
    }
  }
`

const ContactInfo = ({ heading, paragraph, colorMode }) => {
  return (
    <Container colorMode={colorMode}>
      <h1>{heading}</h1>
      <div>{paragraph}</div>
      <IconBox>
        <a href="https://github.com/JordanWinslow">
          <img src={github} alt="Github Icon Link" />
        </a>
        <a href="https://twitter.com/JordanDWinslow">
          <img src={twitter} alt="Twitter Icon Link" />
        </a>
        <a href="https://www.facebook.com/JordanDWinslow/">
          <img src={facebook} alt="Facebook Icon Link" />
        </a>
        <a href="https://www.behance.net/jordanwinslow">
          <img src={behance} alt="Behance Icon Link" />
        </a>
        <a href="mailto:admin@jordanwinslow.me?subject=Hello%20Jordan!">
          <img src={email} alt="Email Icon Link" />
        </a>
        <a href="tel:+1-661-388-9913">
          <img src={phone} alt="Phone Call Button" />
        </a>
      </IconBox>
    </Container>
  )
}

export default ContactInfo
