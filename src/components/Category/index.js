import React from 'react'
import { Link, Image, Circle } from './styles'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Circle>
      <Image src={cover} alt='image' />
      <svg viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r='40' />
      </svg>
    </Circle>
    {emoji}
  </Link>
)
Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string
}
