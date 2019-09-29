import React, { Fragment } from "react"
import lightBulbLight from "../images/LightBulb.svg"
import lightBulbDark from "../images/LightBulbDark.svg"

const LightBulb = ({ colorMode, setColorMode }) => {
  return (
    <Fragment>
      <img
        style={{ position: "fixed", bottom: 0, right: 0 }}
        className={colorMode === "dark" ? "fadeOutIn" : "fadeIn"}
        src={colorMode === "dark" ? lightBulbDark : lightBulbLight}
        width="25px"
        onClick={e => setColorMode(colorMode === "dark" ? "light" : "dark")}
      />
    </Fragment>
  )
}

export default LightBulb
