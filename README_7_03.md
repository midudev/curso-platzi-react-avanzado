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
    (register) => {
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
    (register, { loading, error }) => {
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

En el componente UserForm, controlamos si se está cargando el formulario gracias a la prop `disabled`. Tenemos que añadir también los estilos del formulario para cuando esté disabled y añadimos uno para el error.

```js
export const Error = styled.small`
  font-size: 10px;
  color: red;
`

export const Form = styled.form`
  padding: 16px 0;

  &[disabled] {
    opacity: .3;
    pointer-events: none;
  }
`
```

Y esto lo usamos para nuestro componente.
```js
<Fragment>
  { /* Usamos la prop disabled para desactivar el formulario */ }
  <Form disabled={disabled} onSubmit={handleSubmit}>
    <Title>{title}</Title>
    <Input placeholder='Email' {...email} />
    <Input placeholder='Password' type='password' {...password} />
    <Button>{title}</Button>
  </Form>
  { /* Si tenemos un error lo mostramos */ }
  {error && <Error>{error}</Error>}
</Fragment>
```
