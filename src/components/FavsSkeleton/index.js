import React from 'react'
import { FavContainerSkeleton, FavImage } from './styles'

export const FavsSkeleton = (props) => {
  return (
    <FavContainerSkeleton>
      <FavImage light={props.light} />
    </FavContainerSkeleton>
  )
}
