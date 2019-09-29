import React, { Fragment } from "react"
import lightBulbLight from "../images/LightBulb.svg"
import lightBulbDark from "../images/LightBulbDark.svg"

const LightBulb = ({ colorMode, setColorMode }) => {
  return (
    <Fragment>
      <img
        style={{
          backgroundColor:
            colorMode === "dark" ? "var(--dark)" : "var(--light)",
          border: `5px solid ${
            colorMode === "dark" ? "var(--dark)" : "var(--light)"
          }`,
          boxShadow: "0px 0px 3px var(--dark)",
          borderRadius: 10,
          position: "fixed",
          width: 40,
          zIndex: 300,
          bottom: 0,
          right: 3,
        }}
        className={colorMode === "dark" ? "fadeOutIn" : "fadeIn"}
        src={colorMode === "dark" ? lightBulbDark : lightBulbLight}
        onClick={e => setColorMode(colorMode === "dark" ? "light" : "dark")}
      />
    </Fragment>
  )
}

export default LightBulb
