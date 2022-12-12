import React, { Fragment } from 'react'

import { Text, Grid, Link, Image } from './styles'

export const ListOfFavs = ({ favs }) => {
  const hasFavs = favs && Boolean(favs.length)
  const title = favs && favs.length ? `Tienes ${favs.length} favoritos` : 'No tienes favoritos'

  return (
    <Fragment>
      <Text>{title}</Text>
      <Grid>
        {hasFavs && favs.map(fav =>
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        )}
      </Grid>
    </Fragment>
  )
}
