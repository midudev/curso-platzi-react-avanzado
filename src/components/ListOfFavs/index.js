import React from 'react'
import { Grid, Image, Link } from './styles'
import PropTypes from 'prop-types'

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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
