import React from 'react'
import { List, Item } from './styles'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
  return (
    <List>
      {photos.map(photo => <Item key={photo.id}>
        <PhotoCard {...photo} />
      </Item>)
      }
    </List>
  )
}
