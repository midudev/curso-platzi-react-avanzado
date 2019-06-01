import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

export const Category = ({ path = '#', cover = DEFAULT_IMAGE, emoji = '❓' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
