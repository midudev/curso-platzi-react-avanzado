import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

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
  onClick(e) {
    return e
  }
}
