import React from 'react'
import { Router } from '@reach/router'

import Context, { Provider } from './context'

import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { Profile } from './pages/Profile'
import { NotRegistered } from './pages/NotRegistered'

export default function App () {
  return (
    <Provider>
      <Router>
        <Home path='/' />
        <Detail path='detail/:id' />
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
    </Provider>
  )
}
