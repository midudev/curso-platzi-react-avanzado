import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const LikeButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick} type='button'>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

LikeButton.defaultProps = {
  liked: false,
  likes: 0,
  onClick (e) {
    return e
  }
}
LikeButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
