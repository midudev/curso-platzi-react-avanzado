import React from 'react'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { ListOfCategories } from './components/ListOfCategories'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={3} />
        </>
      )}
    </>
  )
}
