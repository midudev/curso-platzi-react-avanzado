import React, { Fragment } from 'react'
import { Article, Img, ImgWrapper } from './styles'

import { FavButton } from '../FavButton'

import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id = 0, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()
  const [like, setLike] = useLocalStorage(`like-${id}`)

  return (
    <Article ref={ref}>
      {show &&
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <ToggleLikeMutation>
            { toggleLike => {
              const handleFavClick = () => {
                setLike(!like)
                !like && toggleLike({ variables: { input: { id } } })
              }

              return <FavButton liked={like} likes={likes} onClick={handleFavClick} />
            }}
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
}
