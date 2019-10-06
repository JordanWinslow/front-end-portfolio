import React, {Suspense} from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import MainLayout from "../components/MainLayout"
import PortfolioItem from "../components/PortfolioItem"
import Loading from "../images/Loading.svg"

const Grid = styled.div`
position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 30px;
  justify-items: center;
  max-width: 1500px;
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    margin: 0 4vw;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
const PageHeader = styled.div`
position: relative;
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
    <PageHeader>
      <h3>Code</h3>
      <h4>Responsive Websites, Web Apps & Programs</h4>
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
              }}>
              <img
                src={Loading}
                alt="Animated Dark Pink Square Grid Loading Animation"
              />
            </div>
          }>
          <Grid>{portfolioItems}</Grid>
        </Suspense>
      )}
    </MainLayout>
  )
}

export default PortfolioGrid
