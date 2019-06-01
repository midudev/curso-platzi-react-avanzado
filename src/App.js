import React, { Fragment } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

export default function () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <Logo />
      <GlobalStyles />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={3} />
          </Fragment>
      }
    </div>
  )
}
