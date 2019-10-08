/*
Author: Jordan Winslow
License: Attribution - NonCommercial 4.0 International
Licence Link: https://creativecommons.org/licenses/by-nc/4.0/legalcode
GitHub Link: https://github.com/JordanWinslow/Animated-Phone-Stack
Short Description:
Created to showcase my mobile-first design strategy and front-end 
engineering knowledge. Inspired by the react-spring.io demo.
Long Description:
This React component can be inserted into any website to create a perfect 
showcase of your mobile designs for the user to interact with.All that is 
required to use this in your portfolio is to replace the images in the folder 
with ones of your choosing, and import src/components/molecules/PhoneStack.js 
and PhoneStack.css into your project.
Powered by JavaScript, React, React-Spring and Styled-Components.
*************************************************************************
If you found this useful, consider referring me to your tech company or 
following me on twitter: @JordanDWinslow   <3 
*************************************************************************/

import React, { useState } from "react"
import { useSprings, animated, interpolate } from "react-spring"
import { useGesture } from "react-use-gesture"
import "./PhoneStack.css"
import styled from "styled-components"
import MobileView from "../images/portfolio/MobileView.png"
import MobileView2 from "../images/portfolio/MobileView2.png"
import MobileView3 from "../images/portfolio/MobileView3.png"
import MobileView4 from "../images/portfolio/MobileView4.png"
import MobileView5 from "../images/portfolio/MobileView5.png"

// Manually arrange your images here or create a helper method to randomize.
const stackOfPhones = [
  MobileView3,
  MobileView4,
  MobileView2,
  MobileView5,
  MobileView
]
// BACKGROUND GRADIENT & SECTION CONTAINER
const PhoneSection = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: url("https://img.icons8.com/office/16/000000/0-percents.png") 39 39,
    auto;
  background: linear-gradient(71deg, #77c1ff, #4f0095, #ff89ab, #52ebac);
  background-size: 800% 800%;
  -webkit-animation: LuxuryGradientBG 43s ease infinite;
  -moz-animation: LuxuryGradientBG 43s ease infinite;
  animation: LuxuryGradientBG 43s ease infinite;
  @-webkit-keyframes LuxuryGradientBG {
    0% {
      background-position: 0% 63%;
    }
    50% {
      background-position: 100% 38%;
    }
    100% {
      background-position: 0% 63%;
    }
  }
  @-moz-keyframes LuxuryGradientBG {
    0% {
      background-position: 0% 63%;
    }
    50% {
      background-position: 100% 38%;
    }
    100% {
      background-position: 0% 63%;
    }
  }
  @keyframes LuxuryGradientBG {
    0% {
      background-position: 0% 63%;
    }
    50% {
      background-position: 100% 38%;
    }
    100% {
      background-position: 0% 63%;
    }
  }
`

const PhoneStack = () => {
  // HELPERS
  const to = i => ({
    x: i * 30,
    y: i * -30,
    scale: 1,
    rot: 10 + Math.random() * 30,
    delay: i * 200
  })
  const from = i => ({ x: 0, rot: 100, scale: 1.6, y: -1000 })
  const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${r /
      10}deg) rotateZ(${r}deg) scale(${s})`

  // MAIN LOGIC
  const [gone] = useState(() => new Set()) // When a phone is removed, it is stored here
  const [props, set] = useSprings(stackOfPhones.length, i => ({
    ...to(i),
    from: from(i)
  })) // create a spring for every Phone Item in the FILO stack (First In Last Out)
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.9 // this number determines speed we have to "flick" to make the phone actually fly out
      const dir = xDir < 0 ? -1 : 1 // You can only flick left or right
      if (!down && trigger) gone.add(index) // if they release holding the phone AND the speed is greater than the trigger, mark the phone as "gone" aka removed from screen
      set(i => {
        if (index !== i) return // make sure we only affect the current phone and not another phone in the stack
        const isGone = gone.has(index) // if the current phone is "Gone" set isGone to true
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // if a phone "isGone" it flies out left or right, otherwise it resets to the starting position.
        const rot = xDelta / 100 + (isGone ? dir * 200 * velocity : 0) // set the phone tilt angle to increase the faster they flick the phone
        const scale = down ? 1.1 : 1 // the top phone should hover above the other phones since it is active
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        }
      })
      if (!down && gone.size === stackOfPhones.length) {
        setTimeout(() => gone.clear() || set(i => to(i)), 600)
      }
    }
  )
  let phones = props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
      id="PhoneLocation" // styling referenced in PhoneStack.css
    >
      {/* Bind user's gesture to the phone and inject the index to keep track of which phone is which */}
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: `url(${stackOfPhones[i]})`
        }}
        id="PhoneScreen" // styling referenced in PhoneStack.css
      />
    </animated.div>
  ))
  return <PhoneSection>{phones}</PhoneSection>
}

export default PhoneStack