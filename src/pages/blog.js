import React, { Suspense } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Navigation from "../components/Navigation"
import Loading from "../images/Loading.svg"
import JWLogo from "../images/JWLogo.svg"

const PostTitle = React.lazy(() => import("../components/PostTitle"))
const BlogPost = React.lazy(() => import("../components/BlogPost"))

const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 3vh 0 0 3vw;
  background-image: url(${JWLogo});
  background-repeat: no-repeat;
  background-position: center;
  width: 75px;
  height: 70px;
  transition-duration: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`
export default ({ data }) => {
  const isServerRendered = typeof window === "undefined"
  return (
    <Layout>
      <Link to="/">
        <Logo />
      </Link>
      <Navigation />
      <SEO title="Jordan Winslow | Front-End Responsive Web & UI Designer Specializing in React" />
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
          <PostTitle
            heading="FRONT-END WEB DEVELOPMENT BLOG"
            subHeading="JavaScript, React, GraphQL & Friends"
          />
          {/*<BlogList />*/}
          <BlogPost
            content={
              /*TODO: Replace content with dynamically loaded markdown files */
              <div>
                <Img
                  alt="Dynamically-Loaded Random Image From Jordan's Blog"
                  fluid={
                    data.allMarkdownRemark.nodes[0].frontmatter.image
                      .childImageSharp.fluid
                  }
                />
                <br />
                <br />
                <p>
                  This image was dynamically rendered from a markdown file at
                  build-time with a GraphQL query!
                </p>
              </div>
            }
          />
          <div className="bgPrimaryLight" style={{ marginBottom: "15vh" }}>
            <p>
              Blog posts coming soon, for now, try resizing the browser window
              and watching the header change!!
            </p>
            You can click the "JW" logo to return home.
          </div>
          {/*<div className="bgSecondaryLight"></div>*/}
        </Suspense>
      )}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        html
        excerpt
        frontmatter {
          date
          title
          keywords
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
