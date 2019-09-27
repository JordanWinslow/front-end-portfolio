import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import headerSvg from "../images/BlogHeader.svg"

const NavLinks = styled.div`
  position: absolute;
  top: 13vw;
  left: 50vw;
  transform: translateX(-25vw);
  background: linear-gradient(90deg, #d54274 0%, #33dada 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 50vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  h4 {
    text-transform: uppercase;
  }
  @media (max-width: 800px) {
    top: 12vw;
    left: 0;
    transform: none;
    width: 100vw;
    padding: 0 2rem;
    h4 {
      font-size: 1.2rem;
    }
  }
`

const Header = () => (
  <header>
    <img
      src={headerSvg}
      alt="Hand-drawn city at night with stars and ufo abducting a cow"
    />
    <NavLinks>
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
    </NavLinks>
  </header>
)

export default Header
