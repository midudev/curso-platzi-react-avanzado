En esta clase vamos a solucionar el hecho que al refrescar la página, la sesión del usuario se pierde. Para ello, vamos a guardar el token que nos devuelve nuestra API. Esta respuesta la podemos recuperar en la promesa que nos devuelve la mutación, de forma que tendremos un objeto data y, dentro de data, podremos acceder a la propiedad `login` que tiene nuestro token.

```js
const handleSubmit = ({ email, password }) => {
  const input = { email, password }
  login({ variables: { input } }).then(({ data }) => activateAuth(data.login))
}
```

Este token lo vamos a enviar como parámetro al método `activateAuth`. Ahora, esto para qué. Pues porque en ese método, vamos a guardar en la sessionStorage este token. La sessión Storage es un almacenamiento en el cliente que estará disponible mientras no cerremos del todo nuestro navegador, así que es perfecto para este caso de uso.

```js
activateAuth: (token) => {
  setIsAuth(true)
  window.sessionStorage.setItem('token', token)
}
```

Ahora, esto nos va a ayudar a determinar si nuestro usuario ya ha iniciado sesión previamente. Para saberlo, vamos a usar el estado inicial de nuestro componente.

```js
const [isAuth, setIsAuth] = useState(() => {
  return window.sessionStorage.getItem('token')
})
```

Lo mismo lo repetimos para el formulario de registro, de forma que haremos que el usuario, cuando se registre, pase a estar con la sesión iniciada directamente. Esto no es seguro, ya que normalmente vamos a querer que el usuario tenga que confirmar su correo, pero te dejo ese reto para ti, para sigas aprendiendo.

Ahora vemos que la página de usuario no registrado ha quedado bastante complicada, con un montón de tabulaciones y muy difíciles de leer. Para solucionar esto vamos a usar un hook que nos permitirá leer el contexto en una sóla línea.

Primero, en nuestro contexto, vamos a tener que exportarlo para que se pueda usar:
```js
export const Context = createContext()
```

Ahora, en nuestra página `NotRegistered` vamos a importar el Contexto completo y el hook de `useContext` y lo usamos más adelante para acceder al contexto.

```js
import React, { Fragment, useContext } from 'react'
import { Context } from '../../Context'

const { activateAuth } = useContext(Context)
```

De esta forma, nuestro código queda mucho más limpio y legible.