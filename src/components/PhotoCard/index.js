import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { Article, Img, ImgWrapper } from './styles'

import { FavButton } from '../FavButton'

import { useNearScreen } from '../../hooks/useNearScreen'

import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id = 0, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show &&
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            { toggleLike => {
              const handleFavClick = () => {
                toggleLike({ variables: { input: { id } } })
              }

              return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            }}
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${componentName} - ${propName} value MUST be defined`)
    }

    if (propValue < 0) {
      return new Error(`${componentName} - ${propName} value MUST be positive`)
    }
  }
}
