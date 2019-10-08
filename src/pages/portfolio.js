import React, { Suspense } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import MainLayout from "../components/MainLayout"
import ControlModal from "../components/ControlModal"
import Loading from "../images/Loading.svg"

const PortfolioItem = React.lazy(() => import("../components/PortfolioItem"))
const PhoneStack = React.lazy(() => import("../components/PhoneStack"))

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 84%;
  margin-bottom: 15vh;
  @media (max-width: 1720px) {
    width: 60%;
    margin: 0 12vw 15vh 12vw;
  }
  @media (max-width: 1400px) {
    width: 70%;
    margin: 0 5vw 15vh 5vw;
  }
  @media (max-width: 1200px) {
    width: 100vw;
    margin: 15vh 0;
  }
  @media (max-width: 1200px) and (max-height: 700px) {
    margin: 20vh 0;
  }
`
const PageHeader = styled.div`
  position: relative;
  align-self: flex-end;
  width: 86%;
  margin: 4vh 0;
  cursor: default;
  h1 {
    margin-bottom: 0;
    text-transform: uppercase;
  }
  @media (max-width: 1720px) {
    align-self: flex-start;
    width: 100%;
  }
  @media (max-width: 1400px) {
    width: 86%;
    align-self: flex-end;
  }
  @media (max-width: 1200px) {
    margin: 10vh 0 5vh 0;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 10vw;
    }
  }
`
const DescriptionBox = styled.div`
  padding: 5vh 5vw;
  margin: 0 7vw 10vh 7vw;
  color: var(--light);
  background-color: var(--secondaryLight);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  cursor: default;
  transition-duration: 0.5s;
  :hover {
    transform: scale(1.05);
  }
  @media (max-width: 1720px) {
    margin: 0 0 10vh 0;
  }
  @media (max-width: 1200px) {
    margin: 5vh 15vw 15vh 15vw;
  }
  @media (max-width: 900px) {
    margin: 5vh 0 15vh 0;
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 8vw;
    }
  }
`
const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 3vw;
  justify-items: center;
  align-self: center;
  @media (max-width: 1800px) {
    column-gap: 1vw;
  }
  @media (max-width: 1720px) {
    gap: 5vw;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1380px) {
    column-gap: 2vw;
  }
  @media (max-width: 1200px) {
    gap: 5vw;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 5vh;
  }
`
export const query = graphql`
  query getPortfolio {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/portfolio-items/" } }
    ) {
      nodes {
        frontmatter {
          codeLink
          demoLink
          description
          imageAlt
          title
          image {
            childImageSharp {
              fluid {
                #Creates a series of images for every screen-size
                # and dynamically renders them when they enter the viewport
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
const Portfolio = ({ data }) => {
  const portfolioItems = data.allMarkdownRemark.nodes.map(item => {
    return (
      <PortfolioItem
        key={item.frontmatter.id}
        image={item.frontmatter.image.childImageSharp.fluid}
        imageAlt={item.frontmatter.imageAlt}
        title={item.frontmatter.title}
        description={item.frontmatter.description}
        demoLink={item.frontmatter.demoLink}
        codeLink={item.frontmatter.codeLink}
      />
    )
  })
  const isServerRendered = typeof window === "undefined"
  return (
    <MainLayout>
      <PageContent>
        <PageHeader>
          <h1>MY WORK</h1>
          <h2>Live Demos & Designs</h2>
        </PageHeader>
        {!isServerRendered && (
          <Suspense
            fallback={
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src={Loading}
                  alt="Animated Dark Pink Square Grid Loading Animation"
                />
              </div>
            }
          >
            <DescriptionBox>
              <h3>A Living Resume</h3>
              <p>
                This website serves not only as a medium to display my work, but
                also as a living, breathing resume.
              </p>
              <p>
                Click the "About" link to read the case-study for this website,
                mouse over / tap any image below to learn more about my past
                work, or keep scrolling to see my art design.
              </p>
            </DescriptionBox>
            <Grid>{portfolioItems}</Grid>
          </Suspense>
        )}
      </PageContent>
      {!isServerRendered && (
        <Suspense
          fallback={
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={Loading}
                alt="Animated Dark Pink Square Grid Loading Animation"
              />
            </div>
          }
        >
          <PageContent>
            <PageHeader>
              <h3>DESIGNS</h3>
              <h4>Mobile-First Responsive Designs</h4>
            </PageHeader>
          </PageContent>
          <div id="PhoneStack" style={{ width: "100%", height: "100vh" }}>
            <PhoneStack />
            <ControlModal text="click & drag to fling the phones" />
          </div>
        </Suspense>
      )}
    </MainLayout>
  )
}

export default Portfolio
