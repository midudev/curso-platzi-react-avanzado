import React, { useEffect } from 'react'
import { Router } from '@reach/router'

import { GlobalStyles } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

export default function () {
  return (
    <div>
      <Logo />
      <GlobalStyles />
      <Router primary={false}>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
      </Router>
      <NavBar />
    </div>
  )
}
