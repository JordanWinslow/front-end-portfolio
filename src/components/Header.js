import React from "react"
import styled from "styled-components"
import headerSvgDark from "../images/BlogHeaderDark.svg"
import headerSvgLight from "../images/BlogHeaderLight.svg"
import headerSvgMobileDark from "../images/BlogHeaderMobileDark.svg"
import headerSvgMobileLight from "../images/BlogHeaderMobileLight.svg"

const ImageWrapper = styled.div`
  background-image: url(${props => props.colorMode === "dark" ? headerSvgDark : headerSvgLight});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 17vw;
  @media (max-width: 1500px) {
    height: 19vw;
    margin-bottom: 3vw;
  }
  @media (max-width: 1300px) {
    height: 20vw;
    margin-bottom: 5vw;
  }
  @media (max-width: 1000px) {
    height: 21vw;
    margin-bottom: 7vw;
  }
  @media (max-width: 720px) {
    background-image: url(${props => props.colorMode === "dark" ? headerSvgMobileDark : headerSvgMobileLight});
    height: 48vw;
    margin-bottom: 10vw;
  }
`
const Header = ({ colorMode }) => {
  return (
    <header>
      <ImageWrapper
        colorMode={colorMode}
        className={colorMode === "dark" ? "fadeOutIn" : "fadeIn"}
      />
    </header>
  )
}

export default Header

/*
THIS CODE ACCOMPLISHES THE SAME FEAT AS ABOVE BUT WITH JAVASCRIPT INSTEAD OF CSS MEDIA QUERIES.
THE ONLY PROBLEM IS, THIS CODE DOES NOT WORK WITH GATSBY SINCE GATSBY RENDERS ON THE SERVER SIDE.

import React, { useEffect, useState } from "react"
import { window } from "browser-monads" // fallback for Gatsby SSR
import headerSvgDark from "../images/BlogHeaderDark.svg"
import headerSvgLight from "../images/BlogHeaderLight.svg"
import headerSvgMobileDark from "../images/BlogHeaderMobileDark.svg"
import headerSvgMobileLight from "../images/BlogHeaderMobileLight.svg"
import Navigation from "./Navigation"

const Header = ({ colorMode }) => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [])
  const getSvg = () => {
    // 720 is the Width of the mobile SVG image
    if (width >= 720) {
      return colorMode === "dark" ? headerSvgDark : headerSvgLight
    } else {
      return colorMode === "dark" ? headerSvgMobileDark : headerSvgMobileLight
    }
  }
  return (
    <header>
      <img
        className={colorMode === "dark" ? "fadeOutIn" : "fadeIn"}
        src={getSvg()}
        alt="Hand-drawn city at night with stars and ufo abducting a cow"
      />
      <Navigation />
    </header>
  )
}

export default Header
*/
