Vamos a hacer que el usuario se pueda registrar realmente en la aplicación. Para ello, vamos a usar una mutación de GraphQL y tenemos que crear un componente que nos permita usar esto.

Creamos el archivo `/containers/RegisterMutation`.

```js
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const mutation = gql`
mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`

export const RegisterMutation = ({ children }) => {
  return <Mutation mutation={mutation}>{children}</Mutation>
}
```

Ahora, ya podemos volver a nuestra página `NotRegistered` y usamos esta mutación para poder registrar al usuario.

```js
<RegisterMutation>
  {
    (register, { data = {}, loading, error }) => {
      const handleSubmit = ({ email, password }) => {
        const input = { email, password }
        const variables = { input }
        register({ variables }).then(activateAuth)
      }
      return <UserForm title='Registrarse' onSubmit={handleSubmit} />
    }
  }
</RegisterMutation>
```

Ahora vemos que no le estamos impidiendo al usuario intentar hacer submit del formulario más de una vez. Gracias a que sabemos el estado de loading, vamos a pasar una prop al componente `UserForm` para desactivar el formulario mientras está cargando.

Pasamos la prop loading hacia abajo para hacer que el componente se desactive y lo estilamos.

Pasamos la prop error hacia abajo y hacemos que muestre el error y se estile.

```js
<RegisterMutation>
  {
    (register, { data = {}, loading, error }) => {
      const handleSubmit = ({ email, password }) => {
        const input = { email, password }
        const variables = { input }
        register({ variables }).then(activateAuth)
      }
      const errorMsg = error && 'No se puede registrar el usuario. Ya exista o los datos no son correctos.'

      return <UserForm error={errorMsg} disabled={loading} title='Registrarse' onSubmit={handleSubmit} />
    }
  }
</RegisterMutation>
```

En el componente UserForm controlamos el error y lo mostramos si lo pasamos por prop:
```js
<Fragment>
  <Form disabled={disabled} onSubmit={handleSubmit}>
    <Title>{title}</Title>
    <Input placeholder='Email' {...email} />
    <Input placeholder='Password' type='password' {...password} />
    <Button>{title}</Button>
  </Form>
  {error && <Error>{error}</Error>}
</Fragment>
```
