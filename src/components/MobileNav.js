import React, { useState } from "react"
import styled from "styled-components"
import { TweenLite } from "gsap"
import JWLogo from "../images/JWLogo.svg"
import MobileNavClosed from "../images/MobileNavClosed.svg"
import MobileNavOpened from "../images/MobileNavOpened.svg"
import Diamond from "../images/Diamond.svg"

const OpenButton = styled.div`
  background-image: url(${MobileNavClosed});
  width: 70px;
  height: 70px;
`
const CloseButton = styled.div`
  background-image: url(${MobileNavOpened});
  width: 70px;
  height: 70px;
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
  padding: 10px 8px;
  background-color: var(--dark);
  display: flex;
  justify-content: space-between;
`
const NavigationContainer = styled.div`
  /*Set Animation Initial State*/
  transform: translateY(-100vh);
  /*---------------------------*/
  position: fixed;
  background-color: var(--dark);
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  padding-top: 80px;
`
const LinkContainer = styled.div`
  height: 70%;
  width: 100%;
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
const MobileNav = () => {
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
  return (
    <div>
      <MobileNavHeader>
        <Logo />
        {!open && <OpenButton onClick={rotateOut} />}
        {open && <CloseButton onClick={rotateOut} />}
      </MobileNavHeader>
      {open && (
        <NavigationContainer id="LinkContainer">
          <LinkContainer>
            <NavLink>
              Portfolio
              <img src={Diamond} />
            </NavLink>
            <NavLink>
              Contact
              <img src={Diamond} />
            </NavLink>
            <NavLink>
              About
              <img src={Diamond} />
            </NavLink>
            <NavLink>
              Blog
              <img src={Diamond} />
            </NavLink>
          </LinkContainer>
        </NavigationContainer>
      )}
    </div>
  )
}

export default MobileNav
