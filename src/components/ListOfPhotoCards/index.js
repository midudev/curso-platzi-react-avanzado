import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

import { List, Item } from './styles'

import { PhotoCard } from '../PhotoCard'

const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
  return (
    <List>
      {photos.map(photo => <Item key={photo.id}>
        <PhotoCard {...photo} />
      </Item>)
      }
    </List>
  )
}

const withPhotos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`)

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
