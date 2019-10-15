/* 
Portfolio page utilizing intersection observer to only display certain content when it is in the viewport as
well as lazy loading to only load content when it enters the viewport.

This page also uses a graphQL query at build time to parse 6 markdown files in the /data folder into a dynamic grid 
with images, titles, descriptions and links to each portfolio item.

This query also creates a series of images for different screen sizes and only loads the image relevant to the
user's screen, speeding up page-load times and automating my image-optimization process.
*/
import React, { Suspense, Fragment, useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import MainLayout from "../components/MainLayout"
import SEO from "../components/Seo"
import PortfolioItem from "../components/PortfolioItem"
import ControlModal from "../components/ControlModal"
import FigmaIframes from "../components/FigmaIframes"
import Loading from "../images/Loading.svg"

const PhoneStack = React.lazy(() => import("../components/PhoneStack"))

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 84%;
  margin-bottom: 15vh;
  iframe {
    width: 60vw;
  }
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
    margin: 110px 0 15vh 0;
  }
  @media (max-width: 1200px) and (max-height: 700px) {
    margin: 110px 0 20vh 0;
    padding: 5vh 0;
  }
  @media (max-width: 500px) {
    iframe {
      width: 85vw;
    }
  }
`
const PageHeader = styled.div`
  position: relative;
  align-self: flex-end;
  width: 86%;
  margin: 3vh 0;
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
  margin: 10vh 17vw 15vh 17vw;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  cursor: default;
  transition-duration: 0.5s;
  :hover {
    transform: scale(1.05);
  }
  .link {
    color: var(--primaryLight);
    :hover {
      color: var(--secondaryLight);
    }
  }
  @media (max-width: 1720px) {
    margin: 10vh 0 10vh 0;
    p {
      margin-right: 0;
    }
  }
  @media (max-width: 1200px) {
    margin: 5vh 15vw 15vh 15vw;
  }
  @media (max-width: 900px) {
    margin: 5vh 0 15vh 0;
  }
  @media (max-width: 600px) {
    p {
      padding: 10px;
    }
    h3 {
      padding: 10px;
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
  height: 70vh; /* Without a set height, intersection observer doesn't function properly */
  @media (max-width: 1800px) {
    column-gap: 1vw;
  }
  @media (max-width: 1720px) {
    gap: 5vw;
    grid-template-columns: 1fr 1fr;
    height: 1000px;
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
    height: 2000px;
  }
`
const FullWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  padding: 15vh 0;
  div {
    margin: 0 0 0 5vw;
  }
  @media (max-width: 1720px) {
    div {
      margin: 0 0 0 5vw;
    }
    @media (max-width: 1200px) {
      div {
        margin: 0;
      }
    }
  }
`
const PlaceHolder = (
  <div style={{ height: "100vh" }}>
    <div
      style={{
        position: "absolute",
        bottom: "-50vh",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        src={Loading}
        alt="Animated Dark Pink Square Grid Loading Animation"
      />
    </div>
  </div>
)
/* This query fetches all the portfolio titles, descriptions, images, etc. from markdown files */
export const query = graphql`
  query getPortfolio {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/portfolio-items/" } }
    ) {
      nodes {
        frontmatter {
          id
          codeLink
          demoLink
          description
          imageAlt
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 70) {
                #Creates a series of images for every screen-size
                # and dynamically renders them when they enter the viewport
                # the default quality is quality: 50
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
/* demonstration of a custom hook I created for determining an element's visibility with intersection observer API */
function useVisible(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      // eslint-disable-next-line
      observer.unobserve(ref.current)
    }
  }, [ref, rootMargin]) // only run on mount/unmount
  return isIntersecting
}

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
  /* CUSTOM INTERSECTION OBSERVER HOOK CREATED FROM SCRATCH */
  const phoneStackRef = useRef()
  const isPhoneStackVisible = useVisible(phoneStackRef)
  const portfolioGridRef = useRef()
  const isGridVisible = useVisible(portfolioGridRef, "-100px")

  /* 3RD PARTY REACT-INTERSECTION-OBSERVER HOOK */
  const [figmaRef, figmaInView] = useInView({
    triggerOnce: true,
  })

  const isServerRendered = typeof window === "undefined"
  return (
    <Fragment>
      <MainLayout>
        <SEO title="Front-End Development Portfolio | Jordan Winslow Responsive React Web & UI Designer" />
        <PageContent className="fadeIn">
          {/* HEADING */}
          <PageHeader>
            <h1>MY WORK</h1>
            <h2>Live Demos & Designs</h2>
          </PageHeader>

          {/* PAGE INSTRUCTIONS COMPONENT */}
          <DescriptionBox className="ColorProvider">
            <h3 style={{ marginTop: "5vh" }}>Instructions:</h3>
            <p>
              Mouse over or tap any project below for more info. You may also
              view the live demo or the open-source code for each project.
            </p>
            <p>
              I design with <b>Figma</b>, code with <b>JavaScript</b>,{" "}
              <b>React</b>, <b>CSS & HTML</b> and animate with <b>GSAP</b> &{" "}
              <b>React-Spring</b>.
            </p>
            <p>
              This website is also a demonstration of what I am capable of.{" "}
              <b>
                <Link to="/about" className="link">
                  To view the source code for this website or learn more about
                  my values, click here.
                </Link>
              </b>
            </p>
          </DescriptionBox>

          {/* PORTFOLIO GRID COMPONENT */}
          <Grid ref={portfolioGridRef}>{isGridVisible && portfolioItems}</Grid>
        </PageContent>

        {/* DIVIDER */}
        <FullWidth className="ColorProvider">
          <PageContent>
            <PageHeader>
              <h3>MOBILE FIRST</h3>
              <h4>Beyond Responsive. Try Resizing This Website!</h4>
              <i>Pick up the phones below and toss them!</i>
            </PageHeader>
          </PageContent>
        </FullWidth>

        {/* PHONE STACK COMPONENT */}
        <div
          id="PhoneStack"
          ref={
            phoneStackRef /*To ensure this div doesn't load until it is visible*/
          }
          style={{ width: "100%", height: "100vh" }}
        >
          {isPhoneStackVisible &&
            (!isServerRendered && (
              <Suspense fallback={PlaceHolder}>
                <PhoneStack />
                <ControlModal
                  text="click & drag to fling the phones"
                  position="relative"
                />
              </Suspense>
            ))}
        </div>

        {/* DIVIDER */}
        <FullWidth className="ColorProvider">
          <PageContent>
            <PageHeader>
              <h3>FIGMA PROTOTYPES</h3>
              <h4>Design Systems, Logos, Icons & Prototypes</h4>
              <i>
                Interact With Each Design By Zooming In & Scrolling Inside the
                Frame
              </i>
            </PageHeader>
          </PageContent>
        </FullWidth>

        {/* FIGMA PROTOTYPES COMPONENT */}
        <PageContent style={{ marginTop: "10vh" }} ref={figmaRef}>
          {figmaInView && (
            <center>
              <FigmaIframes />
            </center>
          )}
        </PageContent>
      </MainLayout>
    </Fragment>
  )
}

export default Portfolio
