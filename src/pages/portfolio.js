import React, { Suspense } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import MainLayout from "../components/MainLayout"
import PortfolioItem from "../components/PortfolioItem"
import Loading from "../images/Loading.svg"

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 84%;
  @media (max-width: 1720px) {
    width: 60%;
    margin: 0 12vw;
  }
  @media (max-width: 1400px) {
    width: 70%;
    margin: 0 5vw;
  }
  @media (max-width: 1200px) {
    width: 100vw;
    margin: 15vh 0;
  }
  @media (max-height: 700px) {
    margin: 25vh 0;
  }
`
const PageHeader = styled.div`
  position: relative;
  align-self: flex-end;
  width: 86%;
  margin: 4vh 0;
  h3 {
    margin: 0;
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
    margin: 5vh 0;
    width: 100%;
    text-align: center;
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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
const PortfolioGrid = ({ data }) => {
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
          <h3>Live Demos</h3>
          <h4>Mouse over / tap any image to learn more</h4>
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
            <Grid>{portfolioItems}</Grid>
          </Suspense>
        )}
      </PageContent>
    </MainLayout>
  )
}

export default PortfolioGrid
