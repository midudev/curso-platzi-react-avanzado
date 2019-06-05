import React, { Fragment } from 'react'
import { FavsWithQuery } from '../../containers/FavsWithQuery'

export const Favs = ({ favs = [] }) => {
  return <Fragment>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Fragment>
}
