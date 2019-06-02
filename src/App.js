import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyles } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { Profile } from './pages/Profile'
import { NotRegistered } from './pages/NotRegistered'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import Context from './Context'

export default function () {
  return (
    <div>
      <Logo />
      <GlobalStyles />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='favs' />
                <Profile path='user' />
              </Router>
              : <Router>
                <NotRegistered path='favs' />
                <NotRegistered path='user' />
              </Router>
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
