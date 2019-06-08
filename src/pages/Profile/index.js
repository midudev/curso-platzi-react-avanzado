import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'

export const Profile = () => {
  const { removeAuth } = useContext(Context)
  return <Layout title='Tu perfil'>
    <Button onClick={removeAuth}>Cerrar sesión</Button>
  </Layout>
}

export default Profile
