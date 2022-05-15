import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useSinglePhoto } from '../hooks/useSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useSinglePhoto(id)
  const { photo = {} } = data || {}
  if (loading || error) return null

  return (
    <PhotoCard {...photo} />
  )
}
