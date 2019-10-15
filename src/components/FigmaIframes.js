import React from "react"
import Loading from "../images/Loading.svg"

const FigmaIframes = () => {
  return (
    <iframe
      title="Jordan Winslow's Web Design Prototypes, Icons & Graphic Designs"
      style={{
        border: "none",
        backgroundImage: `url(${Loading})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      width="500"
      height="600"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxcQsOsdVwSjXUrNleDwNoo%2FPROTOTYPES-AND-GRAPHIC-DESIGN%3Fnode-id%3D3%253A1435"
      allowFullScreen
    />
  )
}
export default FigmaIframes

/*
This component displays a loading indicator until 5 iFrames have been loaded. I chose not to use
this because I thought it looked better all in one frame, and the code is much more simple.
This code prevents the user from seeing an empty box when they first scroll to the iFrame section.

import React, { Fragment, useState } from "react"
import Loading from "../images/Loading.svg"
let counter = 0
const FigmaIframes = () => {
  const [allLoaded, setAllLoaded] = useState(false)
  console.log("Loading Figma iFrames...")
  const loadingCounter = () => {
    ++counter
    console.log("Count: " + counter)
    if (counter === 5) {
      setAllLoaded(true)
      console.log("All Loaded. Initializing component.")
    }
  }
  return (
    <Fragment>
      {!allLoaded && <img src={Loading} />}
      <div style={allLoaded ? { display: "contents" } : { display: "none" }}>
        <iframe
          title="Another Hero Desktop Prototype Art Design"
          style={{ border: "none" }}
          width="500"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FhiwC75nntGRJijw6ZNsFCh%2FAnother-Hero-Style-Guide%3Fnode-id%3D5975%253A1094"
          onLoad={loadingCounter}
          allowFullScreen
        ></iframe>
        <iframe
          title="Custom Designed Icons & Logos"
          style={{ border: "none" }}
          width="500"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fyxa7Qd01CS7wQCLtuxROJ3%2FJordan-Winslow-Portfolio-Website%3Fnode-id%3D96%253A56"
          onLoad={loadingCounter}
          allowFullScreen
        ></iframe>
        <iframe
          title="Day & Night Mode SVG Animation"
          style={{ border: "none" }}
          width="500"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fyxa7Qd01CS7wQCLtuxROJ3%2FJordan-Winslow-Portfolio-Website%3Fnode-id%3D106%253A926"
          onLoad={loadingCounter}
          allowFullScreen
        ></iframe>
        <iframe
          title="Business Card Design"
          style={{ border: "none" }}
          width="500"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fyxa7Qd01CS7wQCLtuxROJ3%2FJordan-Winslow-Portfolio-Website%3Fnode-id%3D106%253A927"
          onLoad={loadingCounter}
          allowFullScreen
        ></iframe>
        <iframe
          style={{ border: "none" }}
          width="500"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fyxa7Qd01CS7wQCLtuxROJ3%2FJordan-Winslow-Portfolio-Website%3Fnode-id%3D895%253A358"
          onLoad={loadingCounter}
          allowFullScreen
        ></iframe>
      </div>
    </Fragment>
  )
}

export default FigmaIframes
*/
