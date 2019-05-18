import styled from 'styled-components'

import { Link } from '@reach/router'

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom:0;
  display: flex;
  margin: auto;
  max-width: 500px;
  height: 50px;
  justify-content: space-around;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1000;
`

export const Button = styled(Link)`
  color: #888;
  position: relative;

  &[aria-current] {
    color: #000;
  }

  &[aria-current]::after {
    background: #000;
    border-radius: 50%;
    bottom: 0;
    content: '';
    height: 4px;
    margin: auto;
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
    width: 4px;
  }
`
