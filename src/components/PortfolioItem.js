import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { TweenLite, Power3 } from "gsap"
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
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`
const Title = styled.div`
  text-transform: uppercase;
`
const Description = styled.div`
  margin-top: -15px;
`
const Line = styled.hr`
  background: linear-gradient(90deg, #d54274 0%, #33dada 100%);
  margin-top: 15px;
`
const IconBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /*Implement Space Between Alignment*/
`
const LiveDemo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const ViewCode = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Icon = styled.img`
  width: 40px;
  margin-top: -10px;
  margin-left: 25px;
  pointer-events: all;
  transition: 0.3s;
  :hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 3px 1px var(--dark));
  }
`
const IconLabel = styled.p`
  margin-top: -25px;
`

const PortfolioItem = ({
  bgImage,
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
      className="fadeIn"
    >
      <img
        className="bgImage"
        src={bgImage}
        alt="Front End Web Development Portfolio by Jordan Winslow"
      />
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
