import React from 'react'
import { LikeButton } from '../LikeButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

import { Article, ImgWrapper, Img } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { Link } from '@reach/router'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='image title' />
            </ImgWrapper>
          </Link>
        </>
      )}
      <ToggleLikeMutation>
        {(toggleLike) => {
          const handleLikeClick = () => {
            !liked &&
              toggleLike({
                variables: {
                  input: { id }
                }
              })
            setLiked(!liked)
          }
          return <LikeButton liked={liked} likes={likes} onClick={handleLikeClick} />
        }}
      </ToggleLikeMutation>
    </Article>
  )
}
