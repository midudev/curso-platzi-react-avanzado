import React, { Fragment } from 'react'
import { Article, Button, Img, ImgWrapper } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id = 0, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()
  const [like, setLike] = useLocalStorage(`like-${id}`)

  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show &&
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <Icon onClick={() => setLike(!like)} size='24px' /> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}
