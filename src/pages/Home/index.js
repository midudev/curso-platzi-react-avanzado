import React, { Fragment } from 'react'

import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'
import { Logo } from '../../components/Logo'

import { ListOfCategories } from '../../components/ListOfCategories'
import { QueryListOfPhotos } from '../../requests/QueryListOfPhotos'

export const Home = ({ id }) => {
  return (
    <Fragment>
      <Logo />
      <ListOfCategories />
      <QueryListOfPhotos categoryId={id}>
        {
          ({ error, loading, selectedCategory, photos }) => {
            if (error | loading) return null
            return (
              <ListOfPhotoCards
                photos={photos}
                selectedCategory={selectedCategory}
              />
            )
          }
        }
      </QueryListOfPhotos>
    </Fragment>
  )
}
