import React, { useContext } from 'react'
import { Context } from '../../Context'
import { UserForm } from '../../components/UserForm'
import { RegisterMutation } from '../../containers/RegisterMutation'
import { LoginMutation } from '../../containers/LoginMutation'
import { Layout } from '../../components/Layout'

export const NotRegistered = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Autentificación' subtitle='Inicia sesión o regístrate en Petgram para poder acceder a esta sección'>
      <RegisterMutation>
        {
          (register, { data = {}, loading, error }) => {
            const handleSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => activateAuth(data.signup))
            }
            const errorMsg = error && 'No se puede registrar el usuario. Ya existe o los datos no son correctos.'

            return <UserForm error={errorMsg} disabled={loading} title='Registrarse' onSubmit={handleSubmit} />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {(login, { loading, error }) => {
          const handleSubmit = ({ email, password }) => {
            const input = { email, password }
            login({ variables: { input } }).then(({ data }) => activateAuth(data.login))
          }
          const errorMsg = error && 'No se puede iniciar sesión. El usuario no existe o el password no es correcto.'
          return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={handleSubmit} />
        }}
      </LoginMutation>
    </Layout>
  )
}
