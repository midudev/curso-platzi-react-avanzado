import React from 'react'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  return (
    <>
      <Layout>
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
        </Router>

        <Context.Consumer>
          {({ isAuth }) =>
            isAuth ? (
              <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
            ) : (
              <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
            )}
        </Context.Consumer>
      </Layout>
    </>
  )
}
