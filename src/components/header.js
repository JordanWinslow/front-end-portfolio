import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import headerSvgDark from "../images/BlogHeaderDark.svg"
import headerSvgLight from "../images/BlogHeaderLight.svg"
import headerSvgMobileDark from "../images/BlogHeaderMobileDark.svg"
import headerSvgMobileLight from "../images/BlogHeaderMobileLight.svg"

const ResponsiveNavLinks = styled.div`
  position: absolute;
  top: 13vw;
  left: 0;
  right: 0;
  padding: 0 13rem;
  /* 
  This is an interesting way of center aligning, 
  but seems overly complex so I'm not using it.
  width: 50%;
  left: 50%;
  transform: translateX(-50%);
  */
  background: linear-gradient(90deg, #d54274 0%, #33dada 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  h4 {
    margin: auto;
    padding: 5px 1.3rem;
    border-radius: 50px;
    text-transform: uppercase;
    box-shadow: 0px 0px 4px black;
    transition-duration: 1s;
    :hover {
      box-shadow: 0px 4px 5px black;
    }
  }
  @media (max-width: 1000px) {
    top: 12vw;
    left: 0;
    transform: none;
    width: 100%;
    padding: 0 7rem;
  }
  @media (max-width: 720px) {
    padding: 0 2rem;
    top: 40vw;
    h4 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`

const Header = ({ colorMode }) => {
  /*
  React components re-render when the state changes. I want
  this header to swap out the image with a mobile sized version
  when it reaches 720px in width. The following code accomplishes that.
  */
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
      <ResponsiveNavLinks>
        <h4>
          <Link to="/" className="link-item">
            Blog Home
          </Link>
        </h4>
        <h4>
          <a href="http://localhost:8000" className="link-item">
            Portfolio
          </a>
        </h4>
      </ResponsiveNavLinks>
    </header>
  )
}

export default Header
