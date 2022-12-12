import React from 'react'

import { Layout } from '../../components/Layout'
import { UserForm } from '../../components/UserForm'

import { MutationLogin } from '../../requests/MutationLogin'
import { MutationSignUp } from '../../requests/MutationSignUp'

export const NotRegistered = () => {
  return (
    <Layout title='Acceso'>
      <p>Para acceder a esta sección debes haber iniciado sesión</p>
      <MutationSignUp>
        {({ loading, error, doSignUp }) =>
          <UserForm
            disabled={loading}
            error={error && 'No se puede registrar este usuario. Ya existe o los datos no son correctos.'}
            title='Regístrarse'
            onSubmit={doSignUp}
          />
        }
      </MutationSignUp>

      <MutationLogin>
        {({ loading, error, doLogin }) =>
          <UserForm
            disabled={loading}
            error={error && 'No se puede iniciar sesión. Los datos no son correctos.'}
            title='Iniciar sesión'
            onSubmit={doLogin} />
        }
      </MutationLogin>
    </Layout>
  )
}
