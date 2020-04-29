import React from 'react'
import { Anchor, Image, Circle } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Circle>
      <Image src={cover} alt='image' />
      <svg viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r='40' />
      </svg>
    </Circle>
    {emoji}
  </Anchor>
)
