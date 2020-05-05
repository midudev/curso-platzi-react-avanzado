import React from 'react'
import { useStateValue } from '../../Context'
import { Button } from './styles'

export const SubmitButtom = () => {
  const [, dispatch] = useStateValue()
  const handleClickLogin = () => {
    dispatch({
      type: 'UpdateUserLogin',
      payload: false
    })
    window.sessionStorage.removeItem('token')
  }

  return (
    <Button type='button' onClick={handleClickLogin}>
      Cerrar sesión
    </Button>
  )
}
