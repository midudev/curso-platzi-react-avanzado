import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export default function () {
  return (
    <div>
      <Logo />
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
