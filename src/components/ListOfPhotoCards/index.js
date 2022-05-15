import React from 'react'
import { usePhotos } from '../../hooks/usePhotos'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCards = () => {
  const { data: { photos = [] } = {} } = usePhotos()
  return (
    <List>
      {photos.map(photo =>
        <PhotoCard key={photo.id} {...photo} />
      )}
    </List>
  )
}
