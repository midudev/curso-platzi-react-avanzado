import React from 'react'
import { StyledButton } from './styles'

export const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)
