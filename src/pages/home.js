import React, { Suspense } from "react"
import MainLayout from "../components/MainLayout"
import Loading from "../images/Loading.svg"
const BokehBackground = React.lazy(() =>
  import("../components/BokehBackground")
)
const BokehText = React.lazy(() => import("../components/BokehText"))

const HomePage = () => {
  const phrases = [
      "Evoking Emotion Through Front-End Design",
      "I Create Elegant & Interactive Websites",
      "Driving Engagement With Inspiring Design",
      "Making First Impressions into Lifelong Memories"
    ]
    let randomPhrase = Math.floor(Math.random() * Math.floor(4))
    let phrase = phrases[randomPhrase]
  const isServerRendered = typeof window === "undefined"
  return (
    <MainLayout theme="dark" isHomePage="true">
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
              <img src={Loading} />
            </div>
          }
        >
          <BokehBackground>
            <BokehText bokehText={phrase} />
          </BokehBackground>
        </Suspense>
      )}
    </MainLayout>
  )
}

export default HomePage
