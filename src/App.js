import React, { Fragment } from 'react'

import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { NavBar } from './components/NavBar'

export default function App () {
  return (
    <Fragment>
      <Logo />
      <div>
        <ListOfCategories />
        <ListOfPhotoCards />
        <NavBar />
      </div>
    </Fragment>
  )
}
