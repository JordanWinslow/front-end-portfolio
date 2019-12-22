import React from "react"
import styled from "styled-components"

const FullWidthSection = styled.div`
  width: 100vw;
  height: 65vh;
  max-height: 30rem;
  margin: 20vh 0;
  @media (max-width: 1200px) {
    max-height: unset;
    height: unset;
    margin: 15vh 0;
  }
`
const CenteredContentBox = styled.div`
  height: 100%;
  width: 95vw;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-self: center;
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
const ValuesImage = styled.div`
  width: ${props => props.imageWidth};
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  border-radius: 83px;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-self: center;
  @media (max-width: 1500px) {
    width: 50vw;
  }
  @media (max-width: 1300px) {
    height: 80%;
  }
  @media (max-width: 1200px) {
    width: 50%;
    height: 50vh;
    margin: 70px 0;
  }
  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    border-radius: 33px;
    width: 95%;
  }
`
const ImageTitle = styled.h1`
  color: var(--light);
  width: 65%;
  margin: auto;
  padding: 30px;
  border-radius: 55px;
  background-color: ${props => props.accent}; /* must be rgba(#,#,#,.9) */
  font-size: 4vw;
  line-height: 130%;
  text-align: center;
  @media (max-width: 1500px) {
    font-size: 5vw;
  }
  @media (max-width: 1000px) {
    font-size: 6vw;
  }
  @media (max-width: 800px) {
    font-size: 8vw;
  }
  @media (max-width: 600px) {
    border-radius: 30px;
    font-size: 10vw;
    width: 80%;
  }
`
/*Description should be JSX to support multiple paragraphs*/
const Description = styled.div`
  align-self: center;
  width: ${props => props.descriptionWidth};
  p {
    font-size: 18px;
    line-height: 235%;
  }
  @media (max-width: 1500px) {
    width: 35vw;
  }
  @media (max-width: 1200px) {
    width: 50%;
    p {
      line-height: 200%;
    }
  }
  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 92%;
    p {
      line-height: 180%;
    }
  }
`

const JordansValues = ({
  image,
  imageWidth = "45vw",
  title,
  accentColor,
  description,
  descriptionWidth = "30vw",
}) => {
  return (
    <FullWidthSection>
      <CenteredContentBox>
        <ValuesImage image={image} imageWidth={imageWidth}>
          <ImageTitle accent={accentColor}>{title}</ImageTitle>
        </ValuesImage>
        <Description descriptionWidth={descriptionWidth}>
          {description}
        </Description>
      </CenteredContentBox>
    </FullWidthSection>
  )
}

export default JordansValues
