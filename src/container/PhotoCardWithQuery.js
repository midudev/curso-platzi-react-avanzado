import React from 'react'
import { PhotoCardSkeleton } from '../components/PhotoCardSkeleton'
import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'
import { Error } from '../styles/Error'

export const PhotoCardWithQuery = ({ detailId }) => {
  const { data: { photo = [] } = {}, loading, error } = useGetSinglePhoto(detailId)
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
  return <PhotoCard {...photo} />
}
