import React from 'react'
import { Anchor, Image } from './styles'
import DEFAULT_IMAGE from '../../assets/tail-spin.svg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?', loading = true }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
