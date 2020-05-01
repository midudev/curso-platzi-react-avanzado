import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
  background: #fcfcfc;
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-top: 1px solid #e0e0e0;
  align-items: center;
  justify-content: space-around;
  display: flex;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  color: #888;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  text-decoration: none;
`
