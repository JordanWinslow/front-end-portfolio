import React from "react"
import styled from "styled-components"
import DownArrow from "../images/DownArrow.svg"

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  img {
    margin-top: 20px;
    align-self: center;
  }
  @media (max-width: 800px) {
    img {
      width: 2.5vw;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 5vw;
    }
  }
`
const ScrollIndicator = ({ className, style }) => {
  return (
    <Scroll className={className} style={style}>
      <i>keep scrolling</i>{" "}
      <img src={DownArrow} alt="Down Arrow Keep Scrolling" />
    </Scroll>
  )
}

export default ScrollIndicator
