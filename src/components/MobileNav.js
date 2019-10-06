import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { TweenLite } from "gsap"
import JWLogo from "../images/JWLogo.svg"
import MobileNavClosed from "../images/MobileNavClosed.svg"
import MobileNavOpened from "../images/MobileNavOpened.svg"
import DiamondLight from "../images/DiamondLight.svg"
import DiamondDark from "../images/DiamondDark.svg"
/* 
svg pattern provided by https://www.heropatterns.com and
licensed under Attribution 4.0 International (CC BY 4.0) 
https://creativecommons.org/licenses/by/4.0/
*/
const darkPatternSvg = `data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%23fcfcfc' fill-opacity='0.01' fill-rule='evenodd'/%3E%3C/svg%3E`
const lightPatternSvg = `data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%231f1f25' fill-opacity='0.01' fill-rule='evenodd'/%3E%3C/svg%3E`
const OpenButton = styled.div`
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--dark" : "--light")}
  );
  mask-image: url(${MobileNavClosed});
  width: 70px;
  height: 70px;
  cursor: pointer;
`
const CloseButton = styled.div`
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--dark" : "--light")}
  );
  mask-image: url(${MobileNavOpened});
  width: 70px;
  height: 70px;
  fill: var(${props => (props.colorMode === "dark" ? "--light" : "--dark")});
  cursor: pointer;
`
const Logo = styled.div`
  background-image: url(${JWLogo});
  background-repeat: no-repeat;
  background-position: center;
  width: 75px;
  height: 70px;
`
const MobileNavHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  padding: 20px 20px;
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--light" : "--dark")}
  );
  display: flex;
  justify-content: space-between;
`
const NavigationContainer = styled.div`
  /*Set Animation Initial State*/
  transform: translateY(-100vh);
  /*---------------------------*/
  position: fixed; /*to prevent page scrolling while nav is open*/
  top: 0;
  z-index: 4;
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--light" : "--dark")}
  );
  background-image: url("${props => props.colorMode === "dark" ? lightPatternSvg : darkPatternSvg}");
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
  color: var(--light);
  background: linear-gradient(170deg, #d54274 20%, #33dada 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  text-align: right;
  img {
    margin: 0 8px;
  }
`
const MobileNav = ({ colorMode }) => {
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
    return colorMode === "dark" ? DiamondDark : DiamondLight
  }
  return (
    <div id="MobileNav">
      <MobileNavHeader
        colorMode={colorMode}
        className={colorMode === "dark" ? "fadeIn" : "fadeOutIn"}
      >
        <Logo />
        {!open && <OpenButton colorMode={colorMode} onClick={rotateOut} />}
        {open && <CloseButton colorMode={colorMode} onClick={rotateOut} />}
      </MobileNavHeader>
      {open && (
        <NavigationContainer colorMode={colorMode} id="LinkContainer">
          <LinkContainer>
            <NavLink>
              Portfolio
              <img
                src={getDiamond()}
                alt="rotating diamond graphic during mouse hover"
              />
            </NavLink>
            <NavLink>
              Contact
              <img
                src={getDiamond()}
                alt="rotating diamond graphic during mouse hover"
              />
            </NavLink>
            <NavLink>
              About
              <img
                src={getDiamond()}
                alt="rotating diamond graphic during mouse hover"
              />
            </NavLink>
            <NavLink>
              <Link to="/blog" style={{ cursor: "pointer" }}>
                Blog
              </Link>
              <img
                src={getDiamond()}
                alt="rotating diamond graphic during mouse hover"
              />
            </NavLink>
          </LinkContainer>
        </NavigationContainer>
      )}
    </div>
  )
}

export default MobileNav
