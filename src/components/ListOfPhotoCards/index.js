import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { PhotoCardSkeleton } from '../PhotoCardSkeleton'
import { Error } from '../../styles/Error'
import PropTypes from 'prop-types'

export const ListOfPhotoCardsComponent = ({ loading, error, data: { photos = [1, 2, 3, 4] } }) => {
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

ListOfPhotoCardsComponent.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          categoryId: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          likes: PropTypes.number.isRequired,
          userId: PropTypes.string,
          liked: PropTypes.bool.isRequired
        })
      )
    )
  ),
  loading: PropTypes.bool,
  error: PropTypes.string
}
