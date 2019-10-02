import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PortfolioItem from "../components/PortfolioItem"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 30px;
  justify-items: center;
  max-width: 1500px;
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    margin: 0 auto;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
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
        image={item.frontmatter.image.childImageSharp.fluid}
        imageAlt={item.frontmatter.imageAlt}
        title={item.frontmatter.title}
        description={item.frontmatter.description}
        demoLink={item.frontmatter.demoLink}
        codeLink={item.frontmatter.codeLink}
        key={item.frontmatter.id}
      />
    )
  })
  return <Grid>{portfolioItems}</Grid>
}

export default PortfolioGrid
