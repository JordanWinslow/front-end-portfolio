import React from "react"
import styled from "styled-components"
import twitter from "../images/icon-twitter.svg"
import facebook from "../images/icon-facebook.svg"
import github from "../images/icon-github.svg"
import email from "../images/icon-email.svg"
import phone from "../images/icon-phone.svg"
import behance from "../images/icon-behance.svg"
import darktwitter from "../images/icon-twitterDark.svg"
import darkfacebook from "../images/icon-facebookDark.svg"
import darkgithub from "../images/icon-githubDark.svg"
import darkemail from "../images/icon-emailDark.svg"
import darkphone from "../images/icon-phoneDark.svg"
import darkbehance from "../images/icon-behanceDark.svg"

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

const SocialMedia = ({ colorMode = "light" }) => {
  return (
    <IconBox>
      <a href="https://github.com/JordanWinslow">
        <img
          src={colorMode === "dark" ? github : darkgithub}
          alt="Github Icon Link"
        />
      </a>

      <a href="https://x.com/LiminalFDN">
        <img
          src={colorMode === "dark" ? twitter : darktwitter}
          alt="Twitter Icon Link"
        />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61573754030578">
        <img
          src={colorMode === "dark" ? facebook : darkfacebook}
          alt="Facebook Icon Link"
        />
      </a>

      <a href="mailto:jwinsemail@gmail.com?subject=Hello%20Jordan!">
        <img
          src={colorMode === "dark" ? email : darkemail}
          alt="Email Icon Link"
        />
      </a>
      <a href="#">
        <img
          src={colorMode === "dark" ? phone : darkphone}
          alt="Phone Call Button"
        />
      </a>
    </IconBox>
  )
}

export default SocialMedia
