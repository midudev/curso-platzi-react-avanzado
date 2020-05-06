import React, { lazy, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { useStateValue } from './Context'
import { Layout } from './components/Layout'
import { LoadingPages } from './components/Loader'

const Home = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/Detail'))
const Favs = lazy(() => import('./pages/Favs'))
const User = lazy(() => import('./pages/User'))
const NotFound = lazy(() => import('./pages/NotFound'))
const NotRegisteredUser = lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
  const [{ isAuth }] = useStateValue()
  return (
    <Suspense fallback={<LoadingPages />}>
      <Layout>
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotRegisteredUser path='/login' />}
          {!isAuth && <Redirect noThrow from='/user' to='/login' />}
          {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
          {isAuth && <Redirect noThrow from='/login' to='/' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
      </Layout>
    </Suspense>
  )
}
