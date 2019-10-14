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
  return (
    <Fragment>
      <Link to="/">
        <Logo />
      </Link>
      <SEO title="About Jordan Winslow | Front-End Responsive Web & UI Designer Specializing in React" />
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
        description={value1}
      />
      <Value
        image={value3Image}
        title="lazy ingenuity"
        accentColor="rgba(35, 148, 148, 0.93)"
        description={value1}
      />
      <CircleSection />
    </Fragment>
  )
}

export default about
