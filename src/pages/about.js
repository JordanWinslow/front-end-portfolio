import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/Seo"
import JWLogo from "../images/JWLogo.svg"
import value1Image from "../images/value1Image.jpg"
import value2Image from "../images/value2Image.jpg"
import value3Image from "../images/value3Image.jpg"
import Value from "../components/JordansValues"
import CircleSection from "../components/CircleSection"

const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 3vh 0 0 3vw;
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

const about = () => {
  const value1 = (
    <Fragment>
      <p>
        As a lifelong artist who spent over a decade in sales, I recognize how
        important art design is in every personal or business interaction.
      </p>
      <p>
        From the words we speak to the imagry we use in our marketing campaigns,{" "}
        <b>people ignore designs that ignore people.</b>
      </p>
    </Fragment>
  )
  const value2 = (
    <Fragment>
      <p>
        I refuse to work for organizations or people who value profit over human
        kindness or the evolution of our species.
      </p>
      <p>
        <b>
          I believe we earn our success based on service to others, not at the
          expense of others.
        </b>
      </p>
      <p>
        <i>I have even been known to work for free for the right cause.</i>
      </p>
    </Fragment>
  )
  const value3 = (
    <Fragment>
      <p>
        I’m not interested in wasting your time or mine. I believe in doing
        things the <b>easiest way possible.</b>
      </p>
      <p>
        <i>
          “Laziness drives innovation. How else do you think we got power
          steering?”
        </i>
      </p>
    </Fragment>
  )
  return (
    <Fragment>
      <Link to="/">
        <Logo />
      </Link>
      <SEO title="About Jordan Winslow | Front-End Responsive Web & UI Designer Specializing in React" />
      <center>
        <h2>This page is still in active development so expect bugs!</h2>
      </center>
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
    </Fragment>
  )
}

export default about
