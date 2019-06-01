En esta clase vamos a hacer que al menos podamos guardar en el localStorage si a un usuario le ha gustado una foto.

Pero vamos a empezar, paso a paso, primero le añadimos un estado local al componente, importando `useState` de React.

```js
const [like, setLike] = useState(false)
```

Y, ahora, al hacer click, vamos a hacer que cambie el estado.

```js
<MdFavoriteBorder onClick={() => setLike(!like)} size='24px' /> {likes} likes!
```

Esto está muy bien pero resulta que así el icono no cambiaría nunca y no veríamos visualmente que el estado ha cambiado.

Vamos a importar el otro tipo de icono:
```js
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
```

Y ahora, con el estado, decidimos el icono dependiendo si le gusta al usuario
```js
const Icon = like ? MdFavorite : MdFavoriteBorder
```

Este icono es el que vamos a usar más adelante a la hora de renderizar.
```js
<Icon onClick={() => setLike(!like)} size='24px' /> {likes} likes!
```

Ahora sí, al hacer click en Like, cambia el icono. Pero cuando actualizamos la página, perdemos el estado del like. ¿Cómo lo solucionamos? Pues usando localStorage.

Primero vamos a crear el método `setLocalStorage`.
```js
  const setLocalStorage = value => {
    try {
      setLike(value)
      window.localStorage.setItem('like', value)
    } catch (error) {
      console.error(error)
    }
  }
```

Este método es el que llamaremos ahora al hacer click en el botón de Me gusta.
Revisamos en la web y vemos que hacemos el me gusta pero que al refrescar no tenemos visualmente el me gusta. Si miramos la consola, vemos que en `window.localStorage` sí tenemos la info que queremos.

Esto es porque no hemos inicializado el estado con este valor del localStorage. Para solucionarlo vamos a añadir un estado inicial a useState pero, en lugar de pasarle un valor inicial, vamos a usar una función. Esta función se ejecutará de forma asíncrona tras el renderizado inicial.

```js
const [like, setLike] = useState(() => {
  try {
    const like = window.localStorage.getItem('like')
    return like
  } catch (e) {
    return false
  }
})
```

Ahora sí vemos los likes al entrar en la aplicación pero vemos que todas las fotos están activadas con un like. 

Para hacer que cada Photo tenga su propia id, tenemos que volver al componente `ListOfPhotoCards` y añadirle como id el número de cada foto.

```js
{[1, 2, 3, 4, 5].map(photo => <Item key={photo}><PhotoCard id={photo} /></Item>)
```

Ahora, vamos a usar esta id para identificar cada uno de los elementos en el `localStorage`.

```js
// (`like-${id}`)
const like = window.localStorage.getItem(`like-${id}`)
window.localStorage.setItem(`like-${id}`, value)
```

Ahora sí, cada like es independiente. Sin embargo, si activamos y desactivamos un like, vemos que lo que ocurre es que siempre se queda activo. Esto es porque en el localStorage de nuestra aplicación sólo podemos guardar strings. Para solucionarlo, tenemos que parsear los valores.

```js
return like !== null ? JSON.parse(like) : false
window.localStorage.setItem(`like-${id}`, JSON.stringify(value))
```

Volvemos a la web y vemos que ahora sí funciona correctamente. Aunque no actualiza el número de likes, ya nos preocuparemos por eso más adelante.

Por ahora, para terminar la clase, vamos a extraer esta nueva funcionalidad en un custom hook que podríamos usar en cualquier componente.

Creamos el archivo `/hooks/useLocalStorage.js`. Importamos `useState` y creamos una función que recibe la key donde guardará la información y el valor inicial de esa información. Este hook tendrá que devolver la información que teníamos guardada en el estado y una forma de actualizarlo.

```js
import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  return [storedValue, setValue]
}
```

Volvemos al componente `PhotoCard` y copiamos todo nuestro hook al nuevo customHook. Y adaptamos.

```js
export function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      setValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setLocalStorage]
}
```

Ahora en el componente `PhotoCard` ya podemos usar este nuevo hook.

```js
import { useLocalStorage } from '../../hooks/useLocalStorage'

const [like, setLike] = useLocalStorage(`like-${id}`)
```

Y con esto ya habríamos terminado la sección sobre hooks. ¡Felicidades! Prepárate que vamos a empezar con GraphQL! 