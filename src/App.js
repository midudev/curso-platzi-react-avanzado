import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export default function () {
  return (
    <div>
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
