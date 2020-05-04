import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { IconPets } from '../components/IconPets'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <IconPets />
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables }).then(activateAuth)
              }
              const errorMsg = error && 'El usuario ya existe o hay algun problema'
              return (
                <UserForm
                  disabled={loading}
                  error={errorMsg}
                  title='Registrate'
                  message='¿Ya tienes una cuenta?'
                  redirect='Inicia sesión'
                  onSubmit={onSubmit}
                />
              )
            }}
          </RegisterMutation>
          <LoginMutation>
            {(login, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                login({ variables }).then(activateAuth)
              }
              const errorMsg = error && 'Al parecer el usuario/contraseña no es correcto. '
              return (
                <UserForm
                  disabled={loading}
                  error={errorMsg}
                  title='Inicia sesión'
                  message='¿Aun no tienes una cuenta?'
                  redirect='Registrarse'
                  onSubmit={onSubmit}
                />
              )
            }}
          </LoginMutation>
        </>
      )
    }}
  </Context.Consumer>
)
