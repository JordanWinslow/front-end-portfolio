import React, { useEffect } from "react"
import styled from "styled-components"
import MouseIcon from "../images/MouseIcon.svg"
import TweenLite from "gsap"

const TransparentBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--light);
  position: ${props=>props.position};
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 215px;
  height: 84px;
  padding: 20px;
  pointer-events: none;
  @media (pointer: coarse) {
    display: none;
  }
`
const Icon = styled.div`
  align-self: center;
  background-image: url(${props => props.image});
  background-position: center;
  width: 34px;
  height: 32px;
`
const ModalText = styled.p`
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  width: 132px;
  letter-spacing: 0.115em;
  margin: 0;
`

const ControlModal = ({ text, position = "absolute" }) => {
  useEffect(() => {
    TweenLite.to("#MouseIcon", 1, {
      rotation: 10,
      x: 10,
      delay: 3,
    })
  })
  return (
    <TransparentBox position={position}>
      <ModalText>{text}</ModalText>
      <Icon id="MouseIcon" image={MouseIcon} />
    </TransparentBox>
  )
}

export default ControlModal
