import React from 'react'
import { Link, Img, Span } from './styles'

export const Category = ({ id, cover, emoji = '' }) => {
  return (
    <Link to={`/pet/${id}`}>
      <Img src={cover} />
      <Span>{emoji}</Span>
    </Link>
  )
}
