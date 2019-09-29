import React, { useEffect } from "react"
import { TweenLite, Power2 } from "gsap"
const BlogPost = ({ content }) => {
  useEffect(() => {
    TweenLite.from("#PostContent", 2, {
      y: "80px",
      opacity: 0,
      ease: Power2.easeIn,
    })
  })
  return <div id="PostContent">{content}</div>
}

export default BlogPost
