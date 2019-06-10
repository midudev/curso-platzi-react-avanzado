import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
