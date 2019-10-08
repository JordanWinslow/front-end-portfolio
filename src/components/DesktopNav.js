import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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
  transition-duration: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`
const DesktopNavHeader = styled.div`
  position: absolute;
  top: 3vh;
  left: 3vw;
  z-index: 999;
  width: 80px;
`
const NavigationContainer = styled.div`
  /*Set Animation Initial State*/
  transform: translateX(100vw);
  /*---------------------------*/
  position: fixed;
  z-index: 4;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  /*padding-top: 10vh;*/
  padding-right: 2.4vw;
  pointer-events: none;
`
const LinkContainer = styled.div`
  color: var(${props => (props.colorMode === "dark" ? "--light" : "--dark")});
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
  text-transform: uppercase;
  text-align: right;
  transition-duration: 0.3s;
  margin: 0 auto;
  cursor: pointer;
  pointer-events: all;
  font-weight: 500;
  img {
    margin: 0 8px;
  }
  :hover {
    transform: translateY(-3px);
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`
const DesktopNav = ({ colorMode }) => {
  useEffect(() => {
    TweenMax.to("#LinkContainerDesktop", 1, {
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
        <Link to="/">
          <Logo />
        </Link>
      </DesktopNavHeader>
      <NavigationContainer id="LinkContainerDesktop">
        <LinkContainer colorMode={colorMode}>
          <Link to="/portfolio">
            <NavLink
              onMouseEnter={() => rotateDiamond(1)}
              onMouseLeave={() => stopRotation(1)}
            >
              Portfolio
              <img
                id="diamond1"
                src={getDiamond()}
                alt="rotating diamond graphic during mouse hover"
              />
            </NavLink>
          </Link>
          <NavLink
            onMouseEnter={() => rotateDiamond(2)}
            onMouseLeave={() => stopRotation(2)}
          >
            Contact
            <img
              id="diamond2"
              src={getDiamond()}
              alt="rotating diamond graphic during mouse hover"
            />
          </NavLink>
          <NavLink
            onMouseEnter={() => rotateDiamond(3)}
            onMouseLeave={() => stopRotation(3)}
          >
            About
            <img
              id="diamond3"
              src={getDiamond()}
              alt="rotating diamond graphic during mouse hover"
            />
          </NavLink>
          <Link to="/blog">
            <NavLink
              onMouseEnter={() => rotateDiamond(4)}
              onMouseLeave={() => stopRotation(4)}
            >
              Blog
              <img
                id="diamond4"
                src={getDiamond()}
                alt="rotating diamond graphic during mouse hover"
              />
            </NavLink>
          </Link>
        </LinkContainer>
      </NavigationContainer>
    </div>
  )
}

export default DesktopNav
