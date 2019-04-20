import React from 'react'
import { Anchor, Img, Placeholder, Span } from './styles'

import { useImageIsLoaded } from '../../hooks/useImageIsLoaded'

export const Category = ({ path, cover, emoji = '❓' }) => {
  const imageIsLoaded = useImageIsLoaded({ src: cover })

  return (
    <Anchor href={path}>
      {imageIsLoaded ? <Img src={cover} /> : <Placeholder />}
      <Span>{emoji}</Span>
    </Anchor>
  )
}
