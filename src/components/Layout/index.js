import React from 'react'
import { Logo } from '../Logo'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { NavBar } from '../Navbar'

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Logo />
    {children}
    <NavBar />
  </>
)
