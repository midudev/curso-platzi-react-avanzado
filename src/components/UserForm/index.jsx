import React, { Fragment } from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Error, Form, Input, Button, Title } from './styles'

export const UserForm = ({ error, disabled, hideFields, title, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        {
          !hideFields && <Fragment>
            <Input {...email} placeholder='Email' />
            <Input {...password} placeholder='Password' type='password' />
          </Fragment>
        }
        <Button>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
