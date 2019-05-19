import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const Category = ({ path = '#', cover = DEFAULT_IMAGE, emoji = '❓' }) => (
  <Link href={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
