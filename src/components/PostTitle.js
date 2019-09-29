import React, { useEffect } from "react"
import { TweenLite, Power3 } from "gsap"

const PostTitle = ({ heading, subHeading }) => {
  useEffect(() => {
    TweenLite.from("#PostTitle", 2, {
      y: "80px",
      opacity: 0,
      ease: Power3.easeInOut,
    })
  })
  return (
    <div id="PostTitle" style={{ margin: "2rem 0" }}>
      <center>
        <h1>{heading}</h1>
        <h2>{subHeading}</h2>
      </center>
    </div>
  )
}

export default PostTitle
