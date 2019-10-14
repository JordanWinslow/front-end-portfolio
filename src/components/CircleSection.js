import React from "react"
import styled from "styled-components"
import GradientCircle from "../images/GradientCircle.svg"
import DownArrow from "../images/DownArrow.svg"

const FullWidthSection = styled.div`
  width: 100vw;
  height: 200vh;
  margin-top: -50vh;
  background-image: url(${GradientCircle});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-height: 800px) {
    margin-top: -10vh;
    height: 150vh;
  }
`
const Heading = styled.h3`
  width: 45%;
  margin: 0 auto 8vh auto;
  text-align: center;
  color: var(--light);
  @media (max-width: 1400px) {
    width: 55%;
  }
  @media (max-width: 1200px) {
    font-size: 3vw;
  }
`
const SubHeading = styled.h4`
  width: 45%;
  margin: 0 auto 30vh auto;
  text-align: center;
  color: var(--light);
  @media (max-height: 800px) {
    margin: 0 auto 10vh auto;
  }
  @media (max-width: 1400px) {
    width: 55%;
  }
  @media (max-width: 1200px) {
    font-size: 2vw;
  }
`
const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  color: var(--light);
  @media (max-height: 800px) {
    img {
      align-self: center;
      width: 2.5vw;
    }
  }
`

const CircleSection = () => {
  return (
    <FullWidthSection>
      <Heading>
        This Website Was Designed and Coded From Scratch to Show you Exactly
        What I’m Capable of.
      </Heading>
      <SubHeading>
        If you’re still not sure I can bring your designs to life, take a look
        under the hood and you will be convinced!
      </SubHeading>
      <ScrollIndicator>
        <i>keep scrolling</i>{" "}
        <img src={DownArrow} alt="Down Arrow Keep Scrolling" />
      </ScrollIndicator>
    </FullWidthSection>
  )
}

export default CircleSection
