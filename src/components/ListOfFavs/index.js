import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Image, Link } from './styles'

export const ListOfFavs = ({ favs }) => {
  return <Grid>
    {favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
      <Image key={fav.id} src={fav.src} />
    </Link>)}
  </Grid>
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  }))
}
