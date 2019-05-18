import React, { useState } from 'react'
import { Link } from '@reach/router'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { Article, Button, Img, ImgWrapper } from './styles'
import { MutationLike } from '../../requests/MutationLike'

const SIZE_ICONS = '24px'

export const PhotoCard = ({ id, liked: initialLiked, likes = 0, src }) => {
  const [countLikes, setCountLikes] = useState(likes)
  const [liked, setLiked] = useState(initialLiked)

  const onClickLike = () => {
    const op = liked ? -1 : 1
    setCountLikes(countLikes + op)
    setLiked(!liked)
  }

  const FavIcon = liked
    ? MdFavorite
    : MdFavoriteBorder

  return (
    <Article>
      <Link to={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </Link>

      <MutationLike>
        {
          ({ doToggleLike }) => (
            <Button onClick={() => {
              doToggleLike({ id })
              onClickLike()
            }}>
              <FavIcon size={SIZE_ICONS} /><span>{countLikes} likes!</span>
            </Button>
          )
        }
      </MutationLike>

    </Article>
  )
}
