import React from 'react'
import { Anchor, Img, Placeholder, Span } from './styles'

import { useImageIsLoaded } from '../../hooks/useImageIsLoaded'

const DEFAULT_IMAGE = 'https://bit.ly/category-default-image'

export const Category = ({ path, cover = DEFAULT_IMAGE, emoji = '❓' }) => {
  const imageIsLoaded = useImageIsLoaded({ src: cover })

  return (
    <Anchor href={path}>
      {imageIsLoaded ? <Img src={cover} /> : <Placeholder />}
      <Span>{emoji}</Span>
    </Anchor>
  )
}
