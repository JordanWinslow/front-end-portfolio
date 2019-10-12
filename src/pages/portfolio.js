import React, { Suspense, Fragment, useState, useEffect, useRef } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import MainLayout from "../components/MainLayout"
import PhoneStack from "../components/PhoneStack"
import ControlModal from "../components/ControlModal"
import Loading from "../images/Loading.svg"

const PortfolioItem = React.lazy(() => import("../components/PortfolioItem"))
const FigmaIframes = React.lazy(() => import("../components/FigmaIframes"))

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
/* This query fetches all the portfolio titles, descriptions, images, etc. from markdown files */
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
  /* Set up intersection observer for phone stack so it doesn't animate until inside viewport */
  const phoneStackRef = useRef()
  const isPhoneStackVisible = useVisible(phoneStackRef)
  const portfolioGridRef = useRef()
  const isGridVisible = useVisible(portfolioGridRef, "-100px")
  const isServerRendered = typeof window === "undefined"
  return (
    <Fragment>
      <MainLayout>
        <PageContent className="fadeIn">
          <PageHeader>
            <h1>MY WORK</h1>
            <h2>Live Demos & Designs</h2>
          </PageHeader>
          <DescriptionBox className="ColorProvider">
            <h3 style={{ marginTop: "5vh" }}>Instructions:</h3>
            <p>
              Hover your mouse over or tap any project below to learn how it was
              programmed. You will also be provided with links to the live demo
              and the complete open-source code for each project.
            </p>
            <p>
              I design with <b>Figma</b>, code with <b>JavaScript</b>,{" "}
              <b>React</b>, <b>CSS & HTML</b> and animate with <b>GSAP</b> &{" "}
              <b>React-Spring</b>.
            </p>
            <p>
              I designed & programmed this website from scratch to showcase the
              technologies I am proficient in.{" "}
              <b>
                <Link to="/about" className="link">
                  To view this website's source code or read its case study,
                  click here.
                </Link>
              </b>
            </p>
          </DescriptionBox>
          {!isServerRendered && (
            <Suspense
              fallback={
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
              }
            >
              <Grid ref={portfolioGridRef}>
                {isGridVisible && portfolioItems}
              </Grid>
            </Suspense>
          )}
        </PageContent>
        <FullWidth className="ColorProvider">
          <PageContent>
            <PageHeader>
              <h3>MOBILE FIRST</h3>
              <h4>Beyond Responsive. Try Resizing This Website!</h4>
              <i>Pick up the phones below and toss them!</i>
            </PageHeader>
          </PageContent>
        </FullWidth>

        <div
          id="PhoneStack"
          ref={
            phoneStackRef /*To ensure this div doesn't load until it is visible*/
          }
          style={{ width: "100%", height: "100vh" }}
        >
          {isPhoneStackVisible && (
            <Fragment>
              <PhoneStack />
              <ControlModal
                text="click & drag to fling the phones"
                position="relative"
              />
            </Fragment>
          )}
        </div>

        <FullWidth className="ColorProvider fadeIn">
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
            <PageContent style={{ marginTop: "10vh" }}>
              <center>
                <FigmaIframes />
              </center>
            </PageContent>
          </Suspense>
        )}
      </MainLayout>
    </Fragment>
  )
}

/* custom hook for determining an element's visibility with intersection observer API */
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
      observer.unobserve(ref.current)
    }
  }, []) // only run on mount/unmount
  return isIntersecting
}
export default Portfolio
