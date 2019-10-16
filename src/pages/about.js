import React, { Fragment, useState, useRef } from "react"
import styled, { createGlobalStyle } from "styled-components"
import SEO from "../components/Seo"
import MobileNav from "../components/MobileNav"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LightBulb from "../components/LightBulb"
import Button from "../components/Button"
import ScrollIndicator from "../components/ScrollIndicator"
import portfolioPicture from "../images/JordanWinslow.jpg"
import value1Image from "../images/value1Image.jpg"
import value2Image from "../images/value2Image.jpg"
import value3Image from "../images/value3Image.jpg"
import codeExample1 from "../images/codeExample1.jpg"
import Value from "../components/JordansValues"
import CircleSection from "../components/CircleSection"

// DARK MODE IMPLEMENTATION
const Color = createGlobalStyle`
  body {
    color: ${props =>
      props.theme === "dark" ? "var(--light)" : "var(--dark)"};
    background-color: ${props =>
      props.theme === "dark" ? "var(--dark)" : "var(--light)"};
    transition: .8s ease-out;
  }
  .InverseColorProvider {
    color: ${props =>
      props.theme === "dark" ? "var(--dark)" : "var(--light)"};
    background-color: ${props =>
      props.theme === "dark" ? "var(--light)" : "var(--dark)"};
    transition: .8s ease-out;
  }
  .ColorProvider {
    color: ${props =>
      props.theme === "dark" ? "var(--light)" : "var(--dark)"};
    background-color: ${props =>
      props.theme === "dark" ? "var(--dark)" : "var(--light)"};
    transition: .8s ease-out;
    img {
      ${props => (props.theme === "dark" ? "" : "filter: invert(1);")};
    }
  }
  `
/* on mobile the header image should drop down 110px to make room 
for the navigation bar */
const Spacer = styled.div`
  margin-top: 110px;
`
const IntroductionBox = styled.div`
  width: 100vw;
  padding: 0 16vw;
  display: flex;
  justify-content: space-between;
  align-self: center;
  img {
    width: 27vw;
    height: 27vw;
    margin-right: 50px;
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 1400px) {
    padding: 0 10vw;
  }
  @media (max-width: 1200px) {
    padding: 0 5vw;
    img {
      width: 35vw;
      height: 35vw;
    }
  }
  @media (max-width: 800px) {
    padding: 0 1vw;
    img {
      margin-right: 2vw;
    }
  }
  @media (max-width: 720px) {
    flex-direction: column;
    width: 70vw;
    margin: 0 auto;
    img {
      width: 50vw;
      height: 50vw;
      margin: 0 auto 40px auto;
    }
  }
  @media (max-width: 500px) {
    width: 90vw;
    img {
      width: 65vw;
      height: 65vw;
    }
  }
`
const ScrollBox = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10vh auto;
  @media (max-width: 720px) {
    margin: 12vh auto 10vh auto;
  }
`
const IntroductionText = styled.div`
  width: 50vw;
  h1 {
    font-weight: bold;
    font-size: 47.0946px;
    line-height: 124.4%;
    text-transform: lowercase;
  }
  h2 {
    font-weight: normal;
    font-size: 31.3964px;
    line-height: 125.9%;
    text-transform: lowercase;
    margin-bottom: 60px;
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 4vw;
    }
    h2 {
      font-size: 3vw;
    }
  }
  @media (max-width: 800px) {
    width: 60vw;
    h1 {
      font-size: 5vw;
    }
    h2 {
      font-size: 4vw;
    }
  }
  @media (max-width: 720px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 5.5vw;
    }
    h2 {
      font-size: 4.5vw;
    }
  }
`
const CodeHeading = styled.h2`
  text-align: center;
  width: 60vw;
  margin: 20vh auto 50px auto;
  @media (max-width: 1500px) {
    margin: 0 auto 50px auto;
  }
  @media (max-width: 1200px) {
    margin: auto auto 50px auto;
  }
  @media (max-width: 500px) {
    width: 80vw;
    font-size: 7vw;
  }
`
const value1 = (
  <Fragment>
    <p>
      As a lifelong artist who has spent over a decade in sales & marketing, I
      recognize how important art design is in human interaction.
    </p>
    <p>
      From the words we speak to the imagery we use in our campaigns,{" "}
      <b>people ignore designs that ignore people.</b>
    </p>
  </Fragment>
)
const value2 = (
  <Fragment>
    <p>
      <b>
        I believe we earn our success based on service to others, not at the
        expense of others.
      </b>
    </p>
    <p>
      Therefore I refuse to work for organizations who value profit over human
      kindness or the evolution of our species.
    </p>
    <p>
      <i>I have been known to work for free for the right cause.</i>
    </p>
  </Fragment>
)
const value3 = (
  <Fragment>
    <p>
      I’m not interested in wasting your time or mine. I believe in doing things
      the <b>easiest way possible.</b>
    </p>
    <p>
      <i>
        “Laziness drives innovation. How else do you think we got power
        steering?”
      </i>
    </p>
  </Fragment>
)
const portfolioCode = (
  <Fragment>
    <h4>
      <b>CORE</b>
    </h4>
    <p>React, Gatsby, GraphQL</p>

    <h4>
      <b>STYLING & ANIMATION</b>
    </h4>
    <p>Styled-Components, CSS Keyframes, GSAP, React-Spring</p>

    <h4>
      <b>ADVANCED CODE, ELEGANT IMPLEMENTATION</b>
    </h4>
    <p>
      Functional OOP, Higher-Order Functions, Atomic Design, Intersection
      Observer, React Hooks, React.lazy, CSS Feature Queries
    </p>
  </Fragment>
)

const About = () => {
  const [colorMode, setColorMode] = useState("light") // SET PAGE THEME TO LIGHT MODE ON FIRST LOAD.
  const codeRef = useRef(null)
  const isServerRendered = typeof window === "undefined"
  return (
    <Fragment>
      <Color theme={colorMode} />
      <LightBulb colorMode={colorMode} setColorMode={setColorMode} />
      <MobileNav colorMode={colorMode} alwaysDisplay={true} />
      <Spacer>
        <Header colorMode={colorMode} />
      </Spacer>
      <SEO title="About Jordan Winslow | Front-End Responsive Web & UI Designer Specializing in React" />
      <IntroductionBox>
        <img
          src={portfolioPicture}
          alt="Portfolio of Jordan Winslow, Front End Web Developer & Designer"
        />
        <IntroductionText>
          <h1>
            Front-End Developer, Designer, Music Producer & Advocate of Humanity
          </h1>
          <h2>
            Hello, I’m jordan winslow, and below are my 3 core values which set
            me apart from other developers:
          </h2>
          <Button
            text="no thanks, take me to the code!"
            onClick={() =>
              !isServerRendered &&
              window.scrollTo(0, codeRef.current.offsetTop - 130)
            }
            style={{ fontSize: "calc(12px + .6vw)" }}
          />
        </IntroductionText>
      </IntroductionBox>
      <ScrollBox>
        <ScrollIndicator className="ColorProvider" />
      </ScrollBox>
      <Value
        image={value1Image}
        title="DESIGN IS NOT AN OPTION"
        accentColor="rgba(31, 31, 37, 0.9)"
        description={value1}
      />
      <Value
        image={value2Image}
        title="People Come First"
        accentColor="rgba(170, 75, 107, 0.93)"
        description={value2}
      />
      <Value
        image={value3Image}
        title="lazy ingenuity"
        accentColor="rgba(35, 148, 148, 0.93)"
        description={value3}
      />
      <CircleSection />
      <CodeHeading ref={codeRef}>
        So, What’s Running Under the Hood?
      </CodeHeading>
      <center>
        <a href="https://github.com/JordanWinslow/front-end-portfolio">
          <Button
            text="VIEW CODE ON GITHUB"
            style={{ fontSize: "calc(12px + .6vw)" }}
          />
        </a>
      </center>
      <Value
        image={codeExample1}
        imageWidth="35vw"
        title=""
        accentColor="rgba(0,0,0,0)"
        description={portfolioCode}
        descriptionWidth="50vw"
      />
      <center>
        <h3>Features:</h3>
        <div
          style={{
            textAlign: "left",
            width: "90vw",
            padding: "5vw",
            borderRadius: "50px",
          }}
          className="InverseColorProvider"
        >
          <ul>
            <li>
              Interactive, Animated Homepage With Randomly Generated Background
              & Catch-Phrases on Each Page Load
            </li>
            <li>
              Beyond Responsive: Dynamic Text, Images & Conditional Component
              Loading. Looks Great on ALL Screen Sizes
            </li>
            <li>Site-Wide Day/Night Mode</li>
            <li>Blazing Fast Load Times + Component Lazy-Loading</li>
            <li>
              Cutting-Edge Component CSS With Styled-Components & Feature
              Queries
            </li>
            <li>
              Custom Designed Vector Graphic Icons, Logo & Page Header (About,
              Contact & Blog Page)
            </li>
            <li>
              Interactive Mobile Mockups You Can Pick up And Toss Off-Screen
            </li>
          </ul>
        </div>
      </center>
      <Footer colorMode={colorMode} />
    </Fragment>
  )
}

export default About
