import React from 'react'
import { List, Item } from './styles'

import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
  return (
    <List>
      {photos.map(photo => <Item key={photo.id}>
        <PhotoCard
          id={photo.id}
          categoryId={photo.categoryId}
          likes={photo.likes}
          liked={photo.liked}
          src={photo.src}
          userId={photo.userId} />
      </Item>)
      }
    </List>
  )
}
