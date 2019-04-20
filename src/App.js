import React, { Fragment } from 'react'

import Logo from './components/Logo'
import { FetchListOfCategories } from './containers/FetchListOfCategories'
import ListOfPhotoCards from './components/ListOfPhotoCards'
import NavBar from './components/NavBar'

export default function App () {
  return (
    <Fragment>
      <Logo />
      <div>
        <FetchListOfCategories />
        <ListOfPhotoCards />
        <NavBar />
      </div>
    </Fragment>
  )
}
