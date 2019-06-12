Lo primero que necesitamos es extraer el botón de Me Gusta de la card, de forma que lo tengamos en un componente totalmente separado.

```js
import React from 'react'
import { Button } from './styles'

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='24px' /> {likes} likes!
    </Button>
  )
}
```

También tenemos que extraer los estilos del botón:

```js en styles.js
import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  display: flex;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
```

Ahora, ya podemos utilizar este nuevo componente en la `PhotoCard`.

```js
const handleFavClick = () => {
  setLike(!like)
}
<FavButton liked={like} likes={likes} onClick={handleFavClick} />
```

Con esto ya preparado, ya podemos crear nuestra primera mutación. Creamos el archivo `containers/ToggleLikeMutation` y dentro lo primero que hacemos es importar las dependencias necesarias.

```js
import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
```

Creamos nuestra mutación. Ahora mismo, vamos a usar una forma de crear likes de forma anónima. Más adelante, ya nos preocuparemos de hacer que sólo los usuarios registrados puedan hacer este tipo de operaciones.

```js
const mutation = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`
```

Ahora, vamos a devolver un componente. Este componente recibirá sólo una prop, que será children, esto es, que le pasaremos como children la función que debe ejecutar. Esto es muy útil, ya que de esta forma esta mutación la podamos usar donde queramos, sin necesidad de saber qué va a renderizar.

```js
export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={mutation}>{children}</Mutation>
}
```

Ya podemos volver a nuestro componente PhotoCard donde vamos a importar este nuevo componente.

```js
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
```

Ahora, vamos a envolver nuestro componente `FavButton` con el ToggleLikeMutatioion. Dentro debemos pasarle como children una función. Esta función lo que hará es renderizar el componente `FavButton`

```js
<ToggleLikeMutation>
  { () => {
      return <FavButton liked={like} likes={likes} onClick={handleFavClick} />
    }
  }
</ToggleLikeMutation>
```

Ahora, este children lo estamos haciendo para algo y es para poder recuperar la acción de hacer like en nuestro componente cuando queramos. Para lograrlo, debemos recuperar el parámetro que nos viene con la mutación, que es una función que podremos ejecutar.

```js
<ToggleLikeMutation>
{toggleLike => {
  return <FavButton liked={like} likes={likes} onClick={handleFavClick} />
}}
</ToggleLikeMutation>
```

Como queremos ejecutar tanto esta función como el cambio de state de nuestro componente, vamos a mover la función de handleFavClick de forma que podamos usar dentro esta función `toggleLike`.

```js
<ToggleLikeMutation>
{ toggleLike => {
  const handleFavClick = () => {
    setLike(!like)
    !like && toggleLike()
  }

  return <FavButton liked={like} likes={likes} onClick={handleFavClick} />
}}
</ToggleLikeMutation>
```

Esto no funciona, pero vamos que en la consola nos da un error que nos indica que el parámetro requerido $input no se lo estamos pasando. ¡Vamos a solucionarlo!

A nuestra función `toggleLike` debemos pasarle las variables para que la mutación pueda funcionar correctamente. Le tenemos que pasar un objeto `input` con la propiedad id, que será la id de la fotografía a la que queremos añadir un like. Además, sólo lo haremos cuando no le guste previamente al usuario la foto.

```js
<ToggleLikeMutation>
  { toggleLike => {
    const handleFavClick = () => {
      setLike(!like)
      !like && toggleLike({ variables: { input: { id } } })
    }

    return <FavButton liked={like} likes={likes} onClick={handleFavClick} />
  }}
</ToggleLikeMutation>
```

Ahora, ya funciona nuestro botón Like. Pero, una cosa, ¿cómo es posible que cuando cuando hacemos un like vemos que el contador sube?

Esto es parte de la magia que hace React Apollo por nosotros, ya que la mutación recibe el id de la Photo y Apollo detecta que debe cambiar ese objeto de forma automática por nosotros. Esto generará un nuevo renderizado y veremos reflejados los nuevos likes, sin necesidad de hacer nada más.
