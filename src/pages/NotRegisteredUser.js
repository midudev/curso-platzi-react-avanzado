import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { IconPets } from '../components/IconPets'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <IconPets />
          <RegisterMutation>
            {(register) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables }).then(activateAuth)
              }
              return <UserForm title='Registrate' message='¿Ya tienes una cuenta?' redirect='Inicia sesión' onSubmit={onSubmit} />
            }}
          </RegisterMutation>
          <UserForm title='Inicia sesión' message='¿Aun no tienes una cuenta?' redirect='Registrarse' onSubmit={activateAuth} />
        </>
      )
    }}
  </Context.Consumer>
)
