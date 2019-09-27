import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import headerSvg from "../images/BlogHeaderDark.svg"
//import spaceshipAndCow from "../images/SpaceshipAndCow.svg"
//import mountainsDark from "../images/MountainsDark.svg"
//import svgBackground from "../images/SVGBackground.svg"

const ResponsiveNavLinks = styled.div`
  position: absolute;
  top: 13vw;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #d54274 0%, #33dada 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 50%;
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
  @media (max-width: 750px) {
    padding: 0 2rem;
    h4 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`

const Header = () => (
  <header style={{ overflow: "hidden" }}>
    <img
      src={headerSvg}
      alt="Hand-drawn city at night with stars and ufo abducting a cow"
    />
    <ResponsiveNavLinks>
      <h4>
        <Link to="/" className="link-item">
          Blog Home
        </Link>
      </h4>
      <h4>
        <a href="#" className="link-item">
          Portfolio
        </a>
      </h4>
    </ResponsiveNavLinks>
  </header>
)

export default Header
