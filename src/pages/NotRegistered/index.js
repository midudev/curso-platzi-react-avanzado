import React, { Fragment } from 'react'
import Context from '../../Context'
import { UserForm } from '../../components/UserForm'
import { RegisterMutation } from '../../containers/RegisterMutation'
import { LoginMutation } from '../../containers/LoginMutation'

export const NotRegistered = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <Fragment>
              <RegisterMutation>
                {
                  (register, { data = {}, loading, error }) => {
                    const handleSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
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
                    login({ variables: { input } }).then(activateAuth)
                  }
                  const errorMsg = error && 'No se puede iniciar sesión. El usuario no existe o el password no es correcto.'
                  return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={handleSubmit} />
                }}
              </LoginMutation>
            </Fragment>
          )
        }
      }
    </Context.Consumer>
  )
}
