import React from 'react'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Logo } from '../Logo'
import { NavBar } from '../Navbar'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Logo />
    {children}
    <NavBar />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
