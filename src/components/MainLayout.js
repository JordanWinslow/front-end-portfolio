import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import Footer from "./Footer"
import LightBulb from "./LightBulb"
import "./layout.css"

const darkModeBG = `background-color: #fcfcfc;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='1600' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%23196868' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%231e7e7e' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%23196868' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%231e7e7e' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%23239494' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%2377354b' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%2391405b' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23aa4b6b' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%2391405b' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%2377354b' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23aa4b6b' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%2377354b' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23aa4b6b' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%2391405b' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23aa4b6b' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E");
`/* background by SVGBackgrounds.com */
const lightModeBG = `background-color: #1f1f25;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='1600' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%233e1c27' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%234b2230' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%233e1c27' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%234b2230' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%23582838' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%231b4045' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%23204d54' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23265b63' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%23204d54' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%231b4045' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23265b63' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%231b4045' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23265b63' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%23204d54' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23265b63' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E");
`/* background by SVGBackgrounds.com */
const PageContainer = styled.div`
  ${props => (props.colorMode === "dark" ? lightModeBG : darkModeBG)}
`
// DARK MODE IMPLEMENTATION
const Color = createGlobalStyle`
  body {
    color: ${props =>
      props.theme === "dark" ? "var(--light)" : "var(--dark)"};
    background-color: ${props =>
      props.theme === "dark" ? "var(--dark)" : "var(--light)"};
      transition: .8s ease-out;
  }
  .InverseColorProvider {
    color: ${props =>
      props.theme === "dark" ? "var(--dark)" : "var(--light)"};
    background-color: ${props =>
      props.theme === "dark" ? "var(--light)" : "var(--dark)"};
  }
  .ColorProvider {
    color: ${props =>
      props.theme === "dark" ? "var(--light)" : "var(--dark)"};
    background-color: ${props =>
      props.theme === "dark" ? "var(--dark)" : "var(--light)"};
  }
  `
const Layout = ({ children, isHomePage, theme = "light" }) => {
  const [colorMode, setColorMode] = useState(theme) // SET PAGE THEME TO LIGHT MODE ON FIRST LOAD.
  return (
    <>
      <Color theme={colorMode} />
      <DesktopNav colorMode={colorMode} isHomePage={isHomePage} />
      <MobileNav colorMode={colorMode} />
      <LightBulb colorMode={colorMode} setColorMode={setColorMode} />
      <PageContainer colorMode={colorMode}>
        <main>{children}</main>
        {!isHomePage && (<Footer colorMode={colorMode}/>)}
      </PageContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
