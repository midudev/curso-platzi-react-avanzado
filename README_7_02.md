Para poder recuperar la información del usuario, necesitamos crear formularios. Vamos a crear un componente UserForm que nos servirá para que el usuario pueda registrarse e iniciar sesión.

Vamos a crearlo en la carpeta `/components/UserForm/index.js`:

```js
import React, { useState } from 'react'

export const UserForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button>Action</button>
    </form>
  )
}
```

Ahora, pasamos a usar este componente en nuestra página de `NotRegistered`.

Al probarlo, vemos que cuando le damos al botón se hace Submit. Esto es porque el último botón de un formulario, hace submit por defecto. Vamos a arreglarlo para que haga submit de lo que le pasemos como prop.

```js
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
```

Ahora en el componente donde usamos esto, le pasamos como prop el submit, para que se autentifique el usuario.

```js
<UserForm onSubmit={activateAuth} />
```

Hecho esto, vamos a limpiar un poco nuestro componente <UserForm>. Para ello, vamos a crear un custom hook que nos va ayudar a recuperar mejor los valores de un formulario.

```js
import React, { useState } from 'react'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Email' value={email.value} onChange={email.onChange} />
      <input placeholder='Password' type='password' value={password.value} onChange={password.onChange} />
      <button>Action</button>
    </form>
  )
}
```

Usando rest operator podemos todavía simplificar más el uso de este hook.

```js
  <input placeholder='Email' {...email} />
  <input placeholder='Password' type='password' {...password} />
```

Ahora, lo extraemos a su carpeta `hooks`, de forma que lo podríamos reutilizar más adelante si fuese necesario.

Hecho esto, vamos a estilar un poco nuestro formulario, para que sea más agradable con el archivo `/components/UserForm/styles.js`

```js
import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
`
```

Los usamos en el componente.

Antes de terminar, vamos a añadirle también la posibilidad de añadir un título customizable por props.

Los estilos:
```js
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`
```

En el componente, usamos los estíslo, y el título lo usamos como título y también para el botón.
```js
export const UserForm = ({ title, onSubmit }) => {
  <Title>{title}</Title>
  <Button>{title}</Button>
}
```

Y ahora en el componente `NotRegistered` podemos usar el componente dos veces, una para iniciar sesión y otra para registrarse.

```js
<Fragment>
  <UserForm title='Registrarse' onSubmit={activateAuth} />
  <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
</Fragment>
```
