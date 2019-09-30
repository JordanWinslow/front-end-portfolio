import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TweenLite from "gsap"
import playIcon from "../images/icons/PlayButton.svg"
import githubIcon from "../images/icons/GithubIcon.svg"

const Card = styled.div`
  background-image: ${props => props.bgImage};
  border-radius: 30px;
  transition: 1s ease-out;
  :hover {
    transform: scale(1.3);
  }
`
const CardPopup = styled.div`
  background-color: ${props =>
    props.colorMode === "dark" ? "var(--dark)" : "var(--light)"};
  color: ${props =>
    props.colorMode === "dark" ? "var(--light)" : "var(--dark)"};
  border-radius: 30px;
  padding: 25px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`
const Title = styled.div`
  /*TODO: Determine styling, if any*/
`
const Description = styled.div`
  /*TODO: Determine styling, if any*/
`
const Line = styled.hr`
  background: linear-gradient(90deg, #d54274 0%, #33dada 100%);
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
`
const IconLabel = styled.p`
  /*TODO: Determine styling, if any*/
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
  useEffect(() => {
    TweenLite.from(".PortfolioItem", 2, {
      y: "80px",
      opacity: 0,
      ease: Power3.easeInOut,
    })
  })
  const animatePopup = () => {
   setPopup(true)
   TweenLite.from(".Popup", 2, {
     opacity: 0,
     ease: Power3.easeInOut,
   })
  }
  return (
    <Card bgImage={bgImage} onMouseOver={animatePopup}>
      {popup && (
        <CardPopup colorMode={colorMode} className="Popup">
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
