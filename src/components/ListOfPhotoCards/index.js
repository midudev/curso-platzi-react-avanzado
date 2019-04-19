import React from 'react'
import { List, Item } from './styles'

import PhotoCard from '../PhotoCard'
import { photos as photosData } from '../../mock-data'

export default function ListOfPhotoCards ({ photos = photosData } = {}) {
  return (
    <List>
      {photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)}
    </List>
  )
}
