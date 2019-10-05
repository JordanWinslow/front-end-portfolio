import React, { Suspense } from "react"
import MainLayout from "../components/MainLayout"
import BokehText from "../components/BokehText"
import Loading from "../images/Loading.svg"
const BokehBackground = React.lazy(() =>
  import("../components/BokehBackground")
)

const HomePage = () => {
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
            <BokehText bokehText="Front-End Web Developer" />
          </BokehBackground>
        </Suspense>
      )}
    </MainLayout>
  )
}

export default HomePage
