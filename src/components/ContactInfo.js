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
  background-color: var(--dark);
  color: var(--light);
  width: 60%;
  height: 25rem;
  margin: auto;
  padding: 5vh 5vw;
`

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  img {
   margin-bottom: 0;
  }
`

const ContactInfo = ({ heading, paragraph }) => {
  return (
    <Container>
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
