import React from 'react'
import { Layout } from '../../components/Layout'
import { UserForm } from '../../components/UserForm'

import { MutationLogout } from '../../requests/MutationLogout'

export const Profile = () => {
  return (
    <Layout title='Mi cuenta'>
      <MutationLogout>
        {
          ({ doLogout }) =>
            <UserForm hideFields title='Cerrar sesión' onSubmit={doLogout} />
        }
      </MutationLogout>
    </Layout>
  )
}
