/* 
Author: Jordan Winslow
LICENSE: Attribution-NonCommercial 4.0 International
License Link: https://creativecommons.org/licenses/by-nc/4.0/legalcode 
*/

import React from "react"
import styled from "styled-components"

const ContentBox = styled.div`
  position: relative;
  z-index: 2;
  height: inherit;
  width: 65vw;
  margin: auto;
  padding: 0 5vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`

const Text = styled.h1`
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--light);
  text-transform: uppercase;
  letter-spacing: 0.8rem;
  padding: 0 5vw;
  @media (max-width: 1200px) {
    margin-bottom: 80px; /* To compensate for mobile header*/
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      filter: blur(10px);
    }
    50%,
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
`

const LetterBox = styled.span`
  animation: fadeIn 3s alternate infinite;
  animation-delay: ${props => props.delay}ms;
`

const BokehText = props => {
  const text = props.bokehText
  const letters = text.split("")
  const content = letters.map(letter => {
    const delay = Math.floor(Math.random() * 1000 + 1)
    return <LetterBox delay={delay}>{letter}</LetterBox>
  })
  return (
    <ContentBox>
      <Text>{content}</Text>
    </ContentBox>
  )
}
export default BokehText