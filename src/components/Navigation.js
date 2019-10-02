import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ResponsiveNavLinks = styled.div`
  position: absolute;
  top: 13vw;
  left: 0;
  right: 0;
  padding: 0 30vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  h4 {
    /* Implementing the gradient this way because on safari browser,
    using a background gradient on a div across 2 elements breaks
    the code. */
    .first {
      background: linear-gradient(90deg, #d54274 0%, #838fa7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .second {
      background: linear-gradient(90deg, #838fa7 0%, #33dada 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
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
  @media (max-width: 1500px) {
    top: 14vw;
    padding: 0 24vw;
  }
  @media (max-width: 1300px) {
    top: 16vw;
    padding: 0 20vw;
  }
  @media (max-width: 1000px) {
    top: 17vw;
    padding: 0 12vw;
  }
  @media (max-width: 720px) {
    padding: 0 3vw;
    top: 43vw;
    h4 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0;
  }
  @media (max-width: 350px) {
    h4 {
      padding: 3px 8px;
    }
  }
`

const Navigation = () => {
  return (
    <ResponsiveNavLinks className="fadeIn">
      <h4>
        <Link to="/" className="first">
          Blog Home
        </Link>
      </h4>
      <h4>
        <Link to="/portfolio" className="second">
          Portfolio
        </Link>
      </h4>
    </ResponsiveNavLinks>
  )
}

export default Navigation
