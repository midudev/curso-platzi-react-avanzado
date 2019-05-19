Creamos el componente `PhotoCard`.

```js
import React from 'react'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <div>
          <img src={src} />
        </div>
      </a>

      <button>
        {likes} likes!
      </button>
    </article>
  )
}
```

Usamos el componente en `App.js`.

Tomamos una imagen por defecto del `db.json`.

Creamos los estilos necesarios.

```js
import styled from 'styled-components'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  padding-top: 8px;
`
```

Faltan los iconos. Instalamos el paquete `npm install react-icons`.
Visitar la página de [react-icons](https://react-icons.netlify.com/#/).
Usaremos los de Material Design.

Lo importamos en index.js de PhotoCard.
`import { MdFavoriteBorder } from 'react-icons/md'`

Lo usamos así:
`<MdFavoriteBorder /> {likes} likes!>`

Vemos que es muy pequeño, le añadimos el size:
`<MdFavoriteBorder size='24px' /> {likes} likes!>`

Vemos que no queda centrado, estilamos usando un selector anidado.
```js
export const Button = styled.button`
  align-items: center;
  display: flex;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
```

Ahora, vamos a crear el componente <ListOfPhotoCards>, que es muy sencillito y nos va a permitir mostrar listas completas de fotos en nuestra aplicación.

Creamos el archivo `/components/ListOfPhotoCards/index.js`

```
import React from 'react'

import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5].map(photo => <Item key={photo}><PhotoCard /></Item>)}
    </List>
  )
}
```

Creamos los estilos del componente:
```js
import styled from 'styled-components'

export const List = styled.ul`
  padding: 16px;
`

export const Item = styled.li`
  padding-bottom: 32px;
`
```

Y los usamos en el `index.js`

Ahora en el componente `App`, cambiamos el uso de `<PhotoCard>` por el uso de `<ListOfPhotoCards>`.
