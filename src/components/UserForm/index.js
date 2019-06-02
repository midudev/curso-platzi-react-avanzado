import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ title, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Input placeholder='Email' {...email} />
      <Input placeholder='Password' type='password' {...password} />
      <Button>{title}</Button>
    </Form>
  )
}
