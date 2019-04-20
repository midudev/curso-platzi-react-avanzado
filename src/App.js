import React, { Fragment } from 'react'

import { Logo } from './components/Logo'
import { FetchListOfCategories } from './containers/FetchListOfCategories'
import { FetchListOfPhotos } from './containers/FetchListOfPhotos'
import { NavBar } from './components/NavBar'

export default function App () {
  return (
    <Fragment>
      <Logo />
      <div>
        <FetchListOfCategories />
        <FetchListOfPhotos />
        <NavBar />
      </div>
    </Fragment>
  )
}
