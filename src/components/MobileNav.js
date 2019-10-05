import React, { useState } from "react"
import styled from "styled-components"
import { TweenLite } from "gsap"
import JWLogo from "../images/JWLogo.svg"
import MobileNavClosed from "../images/MobileNavClosed.svg"
import MobileNavOpened from "../images/MobileNavOpened.svg"
import DiamondLight from "../images/DiamondLight.svg"
import DiamondDark from "../images/DiamondDark.svg"

const OpenButton = styled.div`
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--dark" : "--light")}
  );
  mask-image: url(${MobileNavClosed});
  width: 70px;
  height: 70px;
`
const CloseButton = styled.div`
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--dark" : "--light")}
  );
  mask-image: url(${MobileNavOpened});
  width: 70px;
  height: 70px;
  fill: var(${props => (props.colorMode === "dark" ? "--light" : "--dark")});
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
  padding: 10px 20px;
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
  position: fixed;
  z-index: 3;
  background-color: var(
    ${props => (props.colorMode === "dark" ? "--light" : "--dark")}
  );
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`
const LinkContainer = styled.div`
  height: 70%;
  width: 100%;
  padding-bottom: 50px; /*To avoid overlap with Lightbulb*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const NavLink = styled.h4`
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
      <MobileNavHeader colorMode={colorMode}>
        <Logo />
        {!open && <OpenButton colorMode={colorMode} onClick={rotateOut} />}
        {open && <CloseButton colorMode={colorMode} onClick={rotateOut} />}
      </MobileNavHeader>
      {open && (
        <NavigationContainer colorMode={colorMode} id="LinkContainer">
          <LinkContainer>
            <NavLink>
              Portfolio
              <img src={getDiamond()} />
            </NavLink>
            <NavLink>
              Contact
              <img src={getDiamond()} />
            </NavLink>
            <NavLink>
              About
              <img src={getDiamond()} />
            </NavLink>
            <NavLink>
              Blog
              <img src={getDiamond()} />
            </NavLink>
          </LinkContainer>
        </NavigationContainer>
      )}
    </div>
  )
}

export default MobileNav
