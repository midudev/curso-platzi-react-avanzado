import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { PhotoCardSkeleton } from '../PhotoCardSkeleton'
import { Error } from '../../styles/Error'

export const ListOfPhotoCardsComponent = ({ loading, error, data: { photos = [1, 2, 3, 4] } }) => {
  console.log(photos)
  if (loading) return <PhotoCardSkeleton />
  if (error) {
    return (
      <>
        <PhotoCardSkeleton />
        <Error>
          <p>Upps! parece que se presentó un problema.</p>
          <p>Intenta nuevamente mas tarde.</p>
        </Error>
      </>
    )
  }
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

ListOfPhotoCardsComponent.defaultProps = {
  data: {},
  loading: false,
  error: null
}
