import React, { Fragment, useContext } from 'react'
import { Context } from '../../Context'
import { Button } from '../../components/Button'

export const Profile = () => {
  const { removeAuth } = useContext(Context)
  return <Fragment>
    <h1>Profile</h1>
    <Button onClick={removeAuth}>Cerrar sesión</Button>
  </Fragment>
}
