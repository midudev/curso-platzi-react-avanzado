import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { IconPets } from '../components/IconPets'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <IconPets />
          <UserForm title='Registrate' message='¿Ya tienes una cuenta?' redirect='Inicia sesión' onSubmit={activateAuth} />
          <UserForm title='Inicia sesión' message='¿Aun no tienes una cuenta?' redirect='Registrarse' onSubmit={activateAuth} />
        </>
      )
    }}
  </Context.Consumer>
)
