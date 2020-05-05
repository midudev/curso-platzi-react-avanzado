import React from 'react'
import { LikeButton } from '../LikeButton'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation'

import { Link } from '@reach/router'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { toggleLikePhoto } = useToggleLikeMutation(id)
  const handleLikeClick = () => {
    toggleLikePhoto()
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='image title' />
            </ImgWrapper>
          </Link>
          <LikeButton liked={liked} likes={likes} onClick={handleLikeClick} />
        </>
      )}
    </Article>
  )
}
