import React from 'react'
import { Grid, Image, Link } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return <Grid>
    {
      favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
        <Image src={fav.src} />
      </Link>
      )
    }
  </Grid>
}
