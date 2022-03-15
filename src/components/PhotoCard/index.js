import React, { useRef, useEffect } from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isItersecting } = entries[0]
      console.log({ isItersecting })
    })
    observer.observe(ref.current)
  }, [ref])

  return (
    <article ref={ref}>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>

      </a>
      <Button>
        <MdFavoriteBorder size='30px' /> {likes} likes!
      </Button>
    </article>
  )
}
