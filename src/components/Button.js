import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Box = styled.div`
  padding: 15px;
  border-radius: 18px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  display: inline-flex;
  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.6);
  }
`

const Button = ({ text, onClick, style }) => {
  return (
    <Box style={style} className="InverseColorProvider" onClick={onClick}>
      {text}
    </Box>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
}
export default Button
