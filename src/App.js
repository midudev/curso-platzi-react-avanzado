import React from 'react'
import { Router, Redirect } from '@reach/router'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { useStateValue } from './Context'

export const App = () => {
  const [{ isAuth }] = useStateValue()
  return (
    <>
      <Layout>
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotRegisteredUser path='/login' />}
          {!isAuth && <Redirect noThrow from='/user' to='/login' />}
          {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
          {isAuth && <Redirect noThrow from='/' to='/' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
      </Layout>
    </>
  )
}
