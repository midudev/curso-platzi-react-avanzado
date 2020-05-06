import React from 'react'
import { useStateValue } from '../../Context'
import { useInputValue } from '../../hooks/useInputValue'
import { Container, Paragraph, Form, Input, Title, Button } from './styles'
import { Error } from '../../styles/Error'
import PropTypes from 'prop-types'

export const UserForm = ({ action, loading, error, type, title, errorMsg }) => {
  const [, dispatch] = useStateValue()

  const email = useInputValue('', 'Email')
  const password = useInputValue('', 'Password')

  const handleSubmit = (event) => {
    event.preventDefault()
    action()
      .then(({ data: { login } }) => {
        if (login) {
          dispatch({
            type: 'UpdateUserLogin',
            payload: login
          })
          window.sessionStorage.setItem('token', login)
          window.location.href = '/'
        } else {
          dispatch({
            type,
            payload: true
          })
        }
      })
      .catch(() =>
        dispatch({
          type,
          payload: false
        })
      )
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>{title} con tu cuenta de Petsgram y descubre que los animales tambien tienen estilo.</Paragraph>
      <Form onSubmit={handleSubmit}>
        <Input disabled={loading} type='email' placeholder='Email' {...email} required />
        <Input disabled={loading} type='password' placeholder='Password' {...password} required />
        <Button disabled={loading} type='submit'>
          {title}
        </Button>
      </Form>
      {error && <Error>{errorMsg}</Error>}
    </Container>
  )
}

UserForm.propTypes = {
  action: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  errorMsg: PropTypes.string
}
