import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Container, Paragraph, Form, Input, Title, Button, Link } from './styles'

export const UserForm = ({ onSubmit, title, message, redirect }) => {
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
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <Button>{title}</Button>
        <Paragraph>
          {message}, <Link to='#'>{redirect}</Link>
        </Paragraph>
      </Form>
    </Container>
  )
}
