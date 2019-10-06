import React, { Suspense } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Loading from "../images/Loading.svg"

const PostTitle = React.lazy(() => import("../components/PostTitle"))
const BlogPost = React.lazy(() => import("../components/BlogPost"))

export default ({ data }) => {
  console.log("data: ", data)
  const isServerRendered = typeof window === "undefined"
  return (
    <Layout>
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
                This image was dynamically rendered from a markdown file at
                build-time with a GraphQL query!
              </div>
            }
          />
        </Suspense>
      )}
      {/*<div className="bgPrimaryLight">This is a success message</div>
    <div className="bgSecondaryLight">This is a warning message</div>*/}
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
