import React from 'react'
import { Grid, Image, Link, Paragraph } from './styles'
import { FavsSkeleton } from '../FavsSkeleton'
import { Error } from '../../styles/Error'

export const ListOfFavs = ({ favs, loading, error }) => {
  if (!favs.length) {
    return (
      <>
        <Paragraph>Tu lista de favoritos esta vacia, ve a inicio y agrega tus favoritos</Paragraph>
      </>
    )
  }
  if (loading) return <FavsSkeleton />
  if (error) {
    return (
      <>
        <FavsSkeleton />
        <Error>
          <p>Upps! parece que se presentó un problema.</p>
          <p>Intenta nuevamente mas tarde.</p>
        </Error>
      </>
    )
  }

  return (
    <Grid>
      {favs.map((fav) => {
        return (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} alt='' />
          </Link>
        )
      })}
    </Grid>
  )
}

ListOfFavs.defaultProps = {
  favs: [{ id: '1' }],
  loading: false
}
