/*
This component creates a massive gradient circle with a centered heading, subheading and a scroll indicator.
Text is pre-populated instead of passed in as props because I do not use this component anywhere else on the website.
*/
import React from "react"
import styled from "styled-components"
import GradientCircle from "../images/GradientCircle.svg"
import ScrollIndicator from "./ScrollIndicator"

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
  /*TODO - Fix display on devices with low heights but wide screens */
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
    width: 65%;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    font-size: 6vw;
  }
  @media (max-width: 600px) {
    width: 95%;
    font-size: 7vw;
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
    width: 65%;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    font-size: 4vw;
  }
  @media (max-width: 600px) {
    width: 95%;
    font-size: 5vw;
  }
`
const CircleSection = () => {
  return (
    <FullWidthSection>
      <Heading>
        This Website Was Designed and Coded From Scratch{" "}
        <b>
          <i>(6 years ago)</i>
        </b>{" "}
        to Demonstrate Exactly What I’m Capable of.
      </Heading>
      <SubHeading>
        Here are some of the features of this website that were ahead of their
        time when it was created:
      </SubHeading>
      <ScrollIndicator
        className="InverseColorProvider"
        style={{ background: "none", color: "var(--light)" }}
      />
    </FullWidthSection>
  )
}

export default CircleSection
