import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { TweenLite, Power3 } from "gsap"
import Img from "gatsby-image"
import playIcon from "../images/portfolio/PlayIcon.svg"
import githubIcon from "../images/portfolio/GithubIcon.svg"

const Card = styled.div`
  position: relative;
  width: 466px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  transition: 1s ease-out;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  .bgImage {
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    width: 90vw;
  }
`
const CardPopup = styled.div`
  opacity: 0; /* for animation */
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 20px;
  height: 100%;
  pointer-events: none;
  background-color: ${props =>
    props.colorMode === "dark" ? "var(--dark)" : "var(--light)"};
  color: ${props =>
    props.colorMode === "dark" ? "var(--light)" : "var(--dark)"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Title = styled.div`
  h2 {
    margin-bottom: 0;
    text-transform: uppercase;
    @media (max-width: 700px) {
      font-size: 1.6rem;
    }
    @media (max-width: 390px) {
      font-size: 1.4rem;
      line-height: 1.4;
    }
  }
`
const Description = styled.div``
const Line = styled.hr`
  background: linear-gradient(90deg, #d54274 0%, #33dada 100%);
`
const IconBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    display: block;
    margin: 0 auto;
  }
  p {
    margin-bottom: 0;
  }
`
const LiveDemo = styled.div`
  justify-self: left;
  transition-duration: 0.3s;
  :hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  }
`
const ViewCode = styled.div`
  justify-self: right;
  transition-duration: 0.3s;
  :hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  }
`
const Icon = styled.img`
  width: 40px;
  pointer-events: all;
`
const IconLabel = styled.p`
  pointer-events: all;
`

const PortfolioItem = ({
  image,
  imageAlt,
  title,
  description,
  demoLink,
  codeLink,
  colorMode,
}) => {
  const [popup, setPopup] = useState(false)
  useEffect(() => {
    TweenLite.fromTo(
      ".popup",
      0.4,
      {
        scale: 0.01,
        opacity: 0,
        ease: Power3.easeOut,
        borderRadius: "100%",
      },
      { scale: 1, opacity: 1, borderRadius: 0 }
    )
  })
  const animateIn = () => {
    setPopup(true)
    // triggers a re-render and therefore the useEffect hook.
  }
  const animateOut = () => {
    TweenLite.to(".popup", 2, {
      x: 100,
      opacity: 1,
      ease: Power3.easeIn,
    })
  }
  return (
    <Card onMouseOver={() => animateIn()} onMouseLeave={() => setPopup(false)}>
      <Img className="bgImage" fluid={image} alt={imageAlt} />
      {popup && (
        <CardPopup colorMode={colorMode} className="popup">
          <Title>
            <h2>{title}</h2>
          </Title>
          <Description>{description}</Description>
          <Line />
          <IconBox>
            <LiveDemo>
              <a href={demoLink}>
                <Icon src={playIcon} />
                <IconLabel>live demo</IconLabel>
              </a>
            </LiveDemo>
            <ViewCode>
              <a href={codeLink}>
                <Icon src={githubIcon} />
                <IconLabel>view code</IconLabel>
              </a>
            </ViewCode>
          </IconBox>
        </CardPopup>
      )}
    </Card>
  )
}

export default PortfolioItem
