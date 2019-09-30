import React from "react"
import PortfolioItem from "../components/PortfolioItem"
import portfolioData from "../data/portfolio.json"

const portfolio = () => {
  const poop = portfolioData.item1.map(item => {
    return (
      <PortfolioItem
        bgImage={item.bgImage}
        title={item.title}
        description={item.description}
        demoLink={item.demoLink}
        codeLink={item.codeLink}
        key={item.id}
      />
    )
  })
  return poop
}

export default portfolio
