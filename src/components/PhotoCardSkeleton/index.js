import React from 'react'
import { ContainerPhotoCardSkeleton, CardImage, CardLikes } from './styles'

export const PhotoCardSkeleton = (props) => {
  return (
    <ContainerPhotoCardSkeleton>
      <CardImage light={props.light} />
      <CardLikes light={props.light} />
    </ContainerPhotoCardSkeleton>
  )
}
