import React, { useState } from 'react'
import { Article, Button, Img, ImgWrapper, Footer } from './styles'

import { MdFavoriteBorder, MdFavorite, MdSend } from 'react-icons/md'

const SIZE_ICONS = '24px'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [countLikes, setCountLikes] = useState(likes)
  const [liked, setLiked] = useState(false)

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
      <ImgWrapper>
        <Img src={src} onDoubleClick={onClickLike} />
      </ImgWrapper>
      <Footer>
        <Button onClick={onClickLike}>
          <FavIcon size={SIZE_ICONS} /><span>{countLikes} likes!</span>
        </Button>
        <Button><MdSend size={SIZE_ICONS} /></Button>
      </Footer>
    </Article>
  )
}
