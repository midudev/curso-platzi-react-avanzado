import React from 'react'
import { useStateValue } from '../Context'
import { UserForm } from '../components/UserForm'
import { IconPets } from '../components/IconPets'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

import { Paragraph, ButtomLink } from '../components/UserForm/styles'

const useMutationValue = (action, loading, error, type, errorMsg) => ({
  action,
  loading,
  error,
  type,
  errorMsg
})

export default () => {
  const [{ sectionLogin, email, password }, dispatch] = useStateValue()
  const { register, loading, error } = useRegisterMutation(email, password)
  const { login, loadingLogin, errorLogin } = useLoginMutation(email, password)

  const REGISTER = useMutationValue(register, loading, error, 'sectionLogin', 'El usuario ya existe o hay algun problema')
  const LOGIN = useMutationValue(login, loadingLogin, errorLogin, undefined, 'Al parecer el usuario/contraseña no es correcto.')

  const handleOnCLickValue = (boolean) => {
    dispatch({
      type: 'sectionLogin',
      payload: boolean
    })
  }

  return (
    <>
      <IconPets />
      {sectionLogin ? (
        <>
          <UserForm title='Inicia sesión' {...LOGIN} />
          <Paragraph>
            ¿Aun no tienes una cuenta?,{' '}
            <ButtomLink type='submit' onClick={() => handleOnCLickValue(false)}>
              Registrate
            </ButtomLink>
          </Paragraph>
        </>
      ) : (
        <>
          <UserForm title='Registrate' {...REGISTER} />
          <Paragraph>
            ¿Ya tienes una cuenta?,{' '}
            <ButtomLink type='submit' onClick={() => handleOnCLickValue(true)}>
              Inicia sesión
            </ButtomLink>
          </Paragraph>
        </>
      )}
    </>
  )
}
