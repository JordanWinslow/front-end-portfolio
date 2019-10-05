/* 
Author: Jordan Winslow
LICENSE: Attribution-NonCommercial 4.0 International
License Link: https://creativecommons.org/licenses/by-nc/4.0/legalcode 
*/

import React from "react"
import TweenOne from "rc-tween-one"
import styled from "styled-components"

const BokehBackground = styled.div`
  overflow: hidden;
  height: 100vh;
  width: auto;
  background: linear-gradient(270deg, #582838, #1f1f25, #265b63);
  background-size: 600% 600%;
  -webkit-animation: GradientAnimation 20s ease infinite;
  -moz-animation: GradientAnimation 20s ease infinite;
  animation: GradientAnimation 20s ease infinite;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 80px; /*To Compensate for Mobile Header*/
    margin-bottom: -80px;
  }
  /* GRADIENT BACKGROUND ANIMATION */
  @-webkit-keyframes GradientAnimation {
    0% {
      background-position: 0% 56%;
    }
    50% {
      background-position: 100% 45%;
    }
    100% {
      background-position: 0% 56%;
    }
  }
  @-moz-keyframes GradientAnimation {
    0% {
      background-position: 0% 56%;
    }
    50% {
      background-position: 100% 45%;
    }
    100% {
      background-position: 0% 56%;
    }
  }
  @keyframes GradientAnimation {
    0% {
      background-position: 0% 56%;
    }
    50% {
      background-position: 100% 45%;
    }
    100% {
      background-position: 0% 56%;
    }
  }
  /* for a non-animated gradient, uncomment one of the following:
  background: linear-gradient(to right, #582838, #1f1f25, #265b63);
  linear-gradient(90deg, #239494, #670852);
  */
`
const BokehFlare = styled.div`
  position: absolute;
  width: 1280px;
  height: 600px;
  margin: auto;
  .outside {
    position: absolute;
    transition: transform 1s ease-out;
  }
  .inside {
    /*filter: blur(24px); ONLY USE ON HIGH END CPUS!*/
    /*border-radius: 100%;*/
    transform: rotate(45deg);
    width: 100%;
    height: 100%;
  }
`
// I'd love to refactor this to functional OOP with react Hooks but it's not a priority.
class GridLayout {
  constructor(rect, width, height) {
    this.gridX = Math.floor(width / rect)
    this.gridY = Math.floor(height / rect)
    this.cellWidth = width / this.gridX
    this.cellHeight = height / this.gridY
    this.grid = []
    for (let i = 0; i < this.gridY; i += 1) {
      this.grid[i] = []
      for (let s = 0; s < this.gridX; s += 1) {
        this.grid[i][s] = []
      }
    }
  }

  getCells = e => {
    const gridArray = []
    const w1 = Math.floor((e.x - e.radius) / this.cellWidth)
    const w2 = Math.ceil((e.x + e.radius) / this.cellWidth)
    const h1 = Math.floor((e.y - e.radius) / this.cellHeight)
    const h2 = Math.ceil((e.y + e.radius) / this.cellHeight)
    for (let c = h1; c < h2; c += 1) {
      for (let l = w1; l < w2; l += 1) {
        gridArray.push(this.grid[c][l])
      }
    }
    return gridArray
  }

  hasCollisions = t =>
    this.getCells(t).some(e => e.some(v => this.collides(t, v)))

  collides = (t, a) => {
    if (t === a) {
      return false
    }
    const n = t.x - a.x
    const i = t.y - a.y
    const r = t.radius + a.radius
    return n * n + i * i < r * r
  }

  add = value => {
    this.getCells(value).forEach(item => {
      item.push(value)
    })
  }
}

const getPointPos = (width, height, length) => {
  const grid = new GridLayout(150, width, height)
  const posArray = []
  const num = 500
  const radiusArray = [20, 35, 60]
  for (let i = 0; i < length; i += 1) {
    let radius
    let pos
    for (let j = 0; j < num; j += 1) {
      radius = radiusArray[Math.floor(Math.random() * radiusArray.length)]
      pos = {
        x: Math.random() * (width - radius * 2) + radius,
        y: Math.random() * (height - radius * 2) + radius,
        radius,
      }
      if (!grid.hasCollisions(pos)) {
        break
      }
    }
    posArray.push(pos)
    grid.add(pos)
  }
  return posArray
}

const getDistance = (t, a) =>
  Math.sqrt((t.x - a.x) * (t.x - a.x) + (t.y - a.y) * (t.y - a.y))

class Point extends React.PureComponent {
  render() {
    const {
      tx,
      ty,
      x,
      y,
      opacity,
      backgroundColor,
      boxShadow,
      radius,
      ...props
    } = this.props
    let transform
    let zIndex = 0
    let animation = {
      x: (Math.random() * 2 - 1) * 70 || 55,
      duration: 4000,
      delay: Math.random() * 2000,
      yoyo: true,
      repeat: -1,
    }
    if (tx && ty) {
      if (tx !== x && ty !== y) {
        const distance = getDistance({ x, y }, { x: tx, y: ty })
        const g = Math.sqrt(2000000 / (0.1 * distance * distance))
        transform = `translate(${(g * (x - tx)) / distance}px, ${(g *
          (y - ty)) /
          distance}px)`
      } else if (tx === x && ty === y) {
        transform = `scale(${80 / radius})`
        animation = { y: 0, yoyo: false, repeat: 0, duration: 300 }
        zIndex = 1
      }
    }
    return (
      <div
        style={{
          left: x - radius,
          top: y - radius,
          width: radius * 1.8,
          height: radius * 1.8,
          opacity,
          zIndex,
          transform,
        }}
        {...props}
      >
        <TweenOne
          animation={animation}
          style={{
            backgroundColor,
            boxShadow,
          }}
          className="inside"
        />
      </div>
    )
  }
}

class LinkedAnimate extends React.Component {
  num = 15 // NUMBER OF BOKEHS
  constructor(props) {
    super(props)
    this.state = {
      data: getPointPos(1280, 600, this.num).map(item => ({
        ...item,
        opacity: Math.random() * 0.7 + 0.3,
        backgroundColor: `
        rgb(${Math.round(Math.random() * 30 + 170)},
        ${Math.round(Math.random() * 30 + 75)},
        ${Math.round(Math.random() * 30 + 107)})
        `,
        boxShadow: `
        ${Math.random() * 200}px
        ${Math.random() * 300}px 
        ${Math.random() * 1}px 
        rgb(${Math.round(Math.random() * 30 + 59)},
        ${Math.round(Math.random() * 30 + 141)},
        ${Math.round(Math.random() * 30 + 153)})
        `,
      })),
    }
  }
  onMouseMove = e => {
    const cX = e.clientX
    const cY = e.clientY
    const boxRect = this.box.getBoundingClientRect()
    const pos = this.state.data
      .map(item => {
        const { x, y, radius } = item
        return {
          x,
          y,
          distance:
            getDistance({ x: cX - boxRect.x, y: cY - boxRect.y }, { x, y }) -
            radius,
        }
      })
      .reduce((a, b) => {
        if (!a.distance || a.distance > b.distance) {
          return b
        }
        return a
      })
    if (pos.distance < 60) {
      this.setState({
        tx: pos.x,
        ty: pos.y,
      })
    }  else {
      this.onMouseLeave()
    } 
  }

  
  onMouseLeave = () => {
    this.setState({
      tx: 0,
      ty: 0
    })
  }

  render() {
    const { data, tx, ty } = this.state
    return (
      <BokehBackground>
        <BokehFlare
          ref={c => {
            this.box = c
          }}
          onMouseMove={this.onMouseMove}
        >
          {data.map((item, i) => (
            <Point
              {...item}
              tx={tx}
              ty={ty}
              key={i.toString()}
              className="outside"
            />
          ))}
        </BokehFlare>
        {this.props.children}
      </BokehBackground>
    )
  }
}

export default LinkedAnimate
