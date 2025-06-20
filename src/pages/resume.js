import React, { Suspense, Fragment, useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import MainLayout from "../components/MainLayout"
import SEO from "../components/Seo"
import resumePage1 from "../images/JordanWinslowResumePage1.png"
import resumePage2 from "../images/JordanWinslowResumePage2.png"

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  @media (max-width: 1200px) {
    padding: 1rem;
    margin-top: 110px;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
    img {
      margin-bottom: 1rem;
    }
  }
`

const Resume = ({ data }) => {
  return (
    <Fragment>
      <MainLayout>
        <SEO title="Jordan Winslow Software Engineer Resume" />
        <PageContent className="fadeIn">
          <img src={resumePage1} alt="Jordan Winslow Resume Page 1" />
          <img src={resumePage2} alt="Jordan Winslow Resume Page 2" />
        </PageContent>
      </MainLayout>
    </Fragment>
  )
}

export default Resume
