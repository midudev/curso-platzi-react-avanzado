import React from 'react'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'

export const App = () => {
  return (
    <>
      <Layout>
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
        </Router>
      </Layout>
    </>
  )
}
