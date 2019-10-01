import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { TweenLite, Power3 } from "gsap"
import Img from "gatsby-image"
import playIcon from "../images/portfolio/PlayIcon.svg"
import githubIcon from "../images/portfolio/GithubIcon.svg"

const Card = styled.div`
  position: relative;
  width: 466px;
  height: 275px;
  border-radius: 30px;
  overflow: hidden;
  transition: 1s ease-out;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);

  .bgImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    width: 90vw;
    height: 300px;
  }
`
const CardPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px;
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
  /*Control Margin with Div instead of h2*/
  h2 {
    margin-bottom: 0;
    text-transform: uppercase;
  }
  margin-bottom: 10px;
`
const Description = styled.div``
const Line = styled.hr`
  margin: 15px 0;
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
  /*Implement Space Between Alignment*/
`
const LiveDemo = styled.div`
  justify-self: left;
`
const ViewCode = styled.div`
  justify-self: right;
`
const Icon = styled.img`
  width: 40px;
  pointer-events: all;
  transition: 0.3s;
  :hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 3px 1px var(--dark));
  }
`
const IconLabel = styled.p``

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

  return (
    <Card
      onMouseOver={() => setPopup(true)}
      onMouseLeave={() => setPopup(false)}
    >
      <Img className="bgImage" fluid={image} alt={imageAlt} />
      {popup && (
        <CardPopup colorMode={colorMode}>
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
