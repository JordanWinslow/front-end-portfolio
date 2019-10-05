import React, { useEffect } from "react"
import styled from "styled-components"
import { TweenMax, Linear } from "gsap"
import JWLogo from "../images/JWLogo.svg"
import DiamondLight from "../images/DiamondLight.svg"
import DiamondDark from "../images/DiamondDark.svg"

const Logo = styled.div`
  background-image: url(${JWLogo});
  background-repeat: no-repeat;
  background-position: center;
  width: 75px;
  height: 70px;
`
const DesktopNavHeader = styled.div`
  position: absolute;
  top: 0;
  left: 14px;
  z-index: 999;
  width: 80px;
`
const NavigationContainer = styled.div`
  /*Set Animation Initial State*/
  transform: translateX(100vw);
  /*---------------------------*/
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  padding-top: 15vh;
  padding-right: 20px;
  pointer-events: none;
`
const LinkContainer = styled.div`
  height: 70%;
  width: 250px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const NavLink = styled.h4`
  width: 100%;
  margin-right: 1rem;
  color: var(--light);
  ${props =>
    props.isHomePage
      ? ``
      : `background: linear-gradient(90deg, #d54274 10%, #33dada 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;`}
  text-transform: uppercase;
  text-align: right;
  transition-duration: 0.3s;
  margin: 0 auto;
  cursor: pointer;
  pointer-events: all;
  img {
    margin: 0 8px;
  }
  :hover {
    transform: translateY(-3px);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
`
const DesktopNav = ({ colorMode, isHomePage }) => {
  useEffect(() => {
    TweenMax.to("#LinkContainer", 1, {
      x: 0,
    })
  })
  const getDiamond = () => {
    return colorMode === "dark" ? DiamondLight : DiamondDark
  }
  const rotateDiamond = id => {
    TweenMax.to(`#diamond${id}`, 1, {
      rotation: 90,
      repeat: -1,
      ease: Linear.easeNone,
    })
  }
  const stopRotation = id => {
    TweenMax.to(`#diamond${id}`, 1, {
      rotation: 0,
      repeat: 0,
    })
  }
  return (
    <div id="DesktopNav">
      <DesktopNavHeader>
        <Logo />
      </DesktopNavHeader>
      <NavigationContainer id="LinkContainer">
        <LinkContainer>
          <NavLink
            isHomePage={isHomePage}
            onMouseEnter={() => rotateDiamond(1)}
            onMouseLeave={() => stopRotation(1)}
          >
            Portfolio
            <img id="diamond1" src={getDiamond()} />
          </NavLink>
          <NavLink
            isHomePage={isHomePage}
            onMouseEnter={() => rotateDiamond(2)}
            onMouseLeave={() => stopRotation(2)}
          >
            Contact
            <img id="diamond2" src={getDiamond()} />
          </NavLink>
          <NavLink
            isHomePage={isHomePage}
            onMouseEnter={() => rotateDiamond(3)}
            onMouseLeave={() => stopRotation(3)}
          >
            About
            <img id="diamond3" src={getDiamond()} />
          </NavLink>
          <NavLink
            isHomePage={isHomePage}
            onMouseEnter={() => rotateDiamond(4)}
            onMouseLeave={() => stopRotation(4)}
          >
            Blog
            <img id="diamond4" src={getDiamond()} />
          </NavLink>
        </LinkContainer>
      </NavigationContainer>
    </div>
  )
}

export default DesktopNav
