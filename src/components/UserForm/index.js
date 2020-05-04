import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Container, Paragraph, Form, Input, Title, Button, Link } from './styles'
import { Error } from '../../styles/Error'

export const UserForm = ({ error, disabled, onSubmit, title, message, redirect }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>{title} con tu cuenta de Petsgram y descubre que los animales tambien tienen estilo.</Paragraph>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>{title}</Button>
        <Paragraph>
          {message}, <Link to='#'>{redirect}</Link>
        </Paragraph>
      </Form>
      {error && <Error>{error}</Error>}
    </Container>
  )
}
