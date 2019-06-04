En esta clase vamos a hacer que el usuario pueda iniciar sesión. El login mutation es muy similar al que ya habíamos hecho anteriormente.

```js
import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const mutation = gql`
mutation login($input: UserCredentials!) {
  login(input: $input)
}
`

export const LoginMutation = ({ children }) => {
  return <Mutation mutation={mutation}>{children}</Mutation>
}
```

Ahora, ya podemos volver a nuestra página `NotRegistered` y usamos esta mutación para poder iniciar sesión con el usuario.

Primero, envolvemos el componente `UserForm` con el `LoginMutation`.

```js
<LoginMutation>
  {(login) => {
    return <UserForm title='Iniciar sesión' onSubmit={handleSubmit} />
  }}
</LoginMutation>
```

Ahora, creamos un método `handleSubmit`, que recibirá el email y el password. Creamos una constante input, que será un objeto con el email y el password. De esta forma podremos usar el método `login` y pasarle un objeto con nuestras variables, que será el objeto input que, a su vez, tiene el email y el password.

```js
<LoginMutation>
  {(login) => {
    const handleSubmit = ({ email, password }) => {
      const input = { email, password }
      login({ variables: { input } }).then(activateAuth)
    }
    return <UserForm title='Iniciar sesión' onSubmit={handleSubmit} />
  }}
</LoginMutation>
```

Ahora que ya lo tenemos funcionando, es el momento de volver a hacer los mismos arreglos que teníamos en el registro. De forma que le pasamos el estado de loading, para desactivar el formulario, y los errores que se hayan podido provocar.

```js
<LoginMutation>
  {(login, { loading, error }) => {
    const handleSubmit = ({ email, password }) => {
      const input = { email, password }
      login({ variables: { input } }).then(activateAuth)
    }
    const errorMsg = error && 'No se puede iniciar sesión. El usuario no existe o el password no es correcto.'
    return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={handleSubmit} />
  }}
</LoginMutation>
```
