import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { TweenLite } from "gsap"
import JWLogo from "../images/JWLogo.svg"
import MobileNavClosed from "../images/MobileNavClosed.svg"
import MobileNavOpened from "../images/MobileNavOpened.svg"
import DiamondLight from "../images/DiamondLight.svg"
import DiamondDark from "../images/DiamondDark.svg"

const OpenButton = styled.div`
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--light" : "--dark")}
  );
  mask-image: url(${MobileNavClosed});
  width: 70px;
  height: 70px;
  cursor: pointer;
  @supports not (mask-image: url(${MobileNavClosed})) {
    background-color: var(--dark);
    background-image: url(${MobileNavClosed});
  }
`
const CloseButton = styled.div`
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--light" : "--dark")}
  );
  mask-image: url(${MobileNavOpened});
  width: 70px;
  height: 70px;
  fill: var(${props => (props.colorMode === "dark" ? "--dark" : "--light")});
  cursor: pointer;
  @supports not (mask-image: url(${MobileNavOpened})) {
    background-color: var(--dark);
    background-image: url(${MobileNavOpened});
  }
`
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
const MobileNavHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  padding: 20px 20px;
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--dark" : "--light")}
  );
  display: flex;
  justify-content: space-between;
  @supports not (mask-image: url(${MobileNavOpened})) {
    background-color: var(--dark);
  }
`
const NavigationContainer = styled.div`
  /*Set Animation Initial State*/
  transform: translateY(-100vh);
  /*---------------------------*/
  position: fixed; /*to prevent page scrolling while nav is open*/
  top: 0;
  z-index: 4;
  background-color: ${props =>
    props.colorMode === "dark" ? "var(--dark)" : "var(--light)"};
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
`
const LinkContainer = styled.div`
  height: 70%;
  width: 100%;
  padding-bottom: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const NavLink = styled.h4`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  background-color: ${props =>
    props.colorMode === "dark" ? "var(--dark)" : "var(--light)"};
  color: ${props =>
    props.colorMode === "dark" ? "var(--light)" : "var(--dark)"};
  text-transform: uppercase;
  text-align: right;
  img {
    margin: 0 8px;
  }
`
const MobileNav = ({ colorMode, alwaysDisplay = false }) => {
  const [open, setOpen] = useState(false) // navigation is closed on page load
  const rotateOut = e => {
    TweenLite.to(e.target, 0.2, {
      rotation: 180,
      scale: 0.5,
      opacity: !open ? 1 : 0,
      onComplete: !open ? displayLinkContainer : closeLinkContainer,
    })
  }
  const displayLinkContainer = () => {
    setOpen(true)
    TweenLite.to("#LinkContainer", 0.2, {
      y: 0,
    })
  }
  const closeLinkContainer = () => {
    TweenLite.to("#LinkContainer", 0.2, {
      y: "-100vh",
    })
    setTimeout(() => {
      setOpen(false)
    }, 200)
  }
  const getDiamond = () => {
    return colorMode === "dark" ? DiamondLight : DiamondDark
  }
  return (
    <div
      id={
        !alwaysDisplay
          ? "MobileNav"
          : undefined /*unset to make it never disappear*/
      }
    >
      <MobileNavHeader
        colorMode={colorMode}
        className={colorMode === "dark" ? "fadeIn" : "fadeOutIn"}
      >
        <Link to="/" style={{ cursor: "pointer" }}>
          <Logo />
        </Link>
        {!open && <OpenButton colorMode={colorMode} onClick={rotateOut} />}
        {open && <CloseButton colorMode={colorMode} onClick={rotateOut} />}
      </MobileNavHeader>
      {open && (
        <NavigationContainer colorMode={colorMode} id="LinkContainer">
          <LinkContainer>
            <Link to="/portfolio" style={{ cursor: "pointer" }}>
              <NavLink colorMode={colorMode}>
                Portfolio
                <img
                  src={getDiamond()}
                  alt="rotating diamond during mouse hover"
                />
              </NavLink>
            </Link>
            <Link to="/contact" style={{ cursor: "pointer" }}>
              <NavLink colorMode={colorMode}>
                Contact
                <img
                  src={getDiamond()}
                  alt="rotating diamond during mouse hover"
                />
              </NavLink>
            </Link>
            <Link to="/about" style={{ cursor: "pointer" }}>
              <NavLink colorMode={colorMode}>
                About
                <img
                  src={getDiamond()}
                  alt="rotating diamond during mouse hover"
                />
              </NavLink>
            </Link>
            <Link to="/resume" style={{ cursor: "pointer" }}>
              <NavLink colorMode={colorMode}>
                Resume
                <img
                  src={getDiamond()}
                  alt="rotating diamond during mouse hover"
                />
              </NavLink>
            </Link>
          </LinkContainer>
        </NavigationContainer>
      )}
    </div>
  )
}

export default MobileNav
