import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

export const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
