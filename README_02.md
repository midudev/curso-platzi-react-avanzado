# 02

Primero revisamos el diseño que ya hemos creado. 
Identificamos los componentes que queremos crear en la home.

Primero, vamos a separar el punto de entrada de nuestra aplicación de forma que lo que renderizaremos no será el `<h1>` si no el componente App. Creamos el archivo `App.js` y este componente lo dejaremos en la raíz de `src` y será donde empezaremos a usar los componentes de React que vamos a ir creando para crear la página de inicio de nuestra app.

Ahora, creamos la carpeta `/components`. El primero que haremos es el Logo. Cada vez que creemos un nuevo componente, vamos a crear una carpeta con el nombre del componente y dentro tendremos el archivo `index.js`. Esto nos permitirá más adelante poder separar mejor los conceptos que podrían tener nuestros componentes.

En este caso, sólo hay que renderizar un svg que tiene nuestro logo. Vamos a hacerlo, de forma que quedaría algo así...

> Explicar de donde pillamos el svg

Vamos a renderizarlo en nuestra aplicación para empezar a ver cómo quedaría.

Ahora, nos toca el siguiente componente, vamos a crear primero el componente de Category. 

> Elaborar más
> Explicar los valores por defecto de los parámetros

```
import React from 'react'

const DEFAULT_IMAGE = 'https://instagram.fbcn8-1.fna.fbcdn.net/vp/33d78e4589320481c0d12b7e5a4d9e6c/5D3A1EC3/t51.2885-19/s150x150/36678860_327618851111247_2864261724893085696_n.jpg?_nc_ht=instagram.fbcn8-1.fna.fbcdn.net'

const Category = ({ path, cover = DEFAULT_IMAGE, emoji = '❓' }) => (
  <a href={path}>
    <img src={cover} />
    {emoji}
  </a>
)

export default Category
```

> Usar estilos en línea primero para conseguir el efecto deseado.

Parar el entorno de desarrollo e instalar styled-components:

```
npm install --save styled-components
```

Instalar el plugin de Babel con soporte a styled components que ofrece server-side rendering, minifacióon de los estilos y una mejor experiencia de desarrollo.

```
npm install --save-dev babel-plugin-styled-components
```

Para activar esta transformación, debemos modificar el archivo `webpack.config.js`, y añadir en la lista de plugins de babel que queremos utilizar este.

Os recomiendo también que os instaléis alguna extensión en vuestro editor para ayudaros con el desarrollo de los styled-componentes. En mi caso tengo la extensión vscode-styled-components que me ayuda con la sintaxis.

Tras esto, vamos a reiniciar el entorno de desarrollo para que tome las dependencias que hemos instalado.

Ahora estilar nuestro primer componente para mostrar la Categoría.

```js
import styled from 'styled-components'

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
```

A partir de ahora, vamos a separar los conceptos de nuestros componentes, de forma que en el index.js vamos a tener el componente y en el archivo styles.js tendremos los estilos de ese componente. Hagamos la separación antes de pasar al siguiente componente.

Ahora, vamos a hacer la lista de categorías, para mostrarlas todas y además con los datos correctos.

Crear `ListOfCategories` -> `index.js` y `styles.js`

Primero los styles.js:

```js
import styled from 'styled-components'

export const List = styled.ul``

export const Item = styled.li``
```

Después usamos los añadimos al `index.js`. Importamos el componente Category, los datos que tenemos en local y los estilos que hemos creado. Dentro del componente vamos a recorrer todas las categorías.

```js
import React from 'react'

import Category from '../Category'
import { categories as categoriesData } from '../../mock-data'
import { List, Item } from './styles'

export default function ListOfCategories ({ categories }) {
  return (
    <List>
      {categoriesData.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
```

Esto está genial, pero vemos que el efecto que hace al cargar las imágenes deja bastante que desear. Vamos a solucionarlo. Para ello volvemos al componente `Category` y le añadimos un estado para saber cuando la imagen se ha cargado correctamente.

```
const [imageLoaded, setImageLoaded] = useState(false)
```

Para controlar cuando se carga la imagen vamos a usar un efecto. Los efectos de React nos permiten ejecutar funciones cada vez que se cambien las props o el estado de nuestro componente.

```
  useEffect(function () {
    const image = new window.Image()
    image.onload = () => setImageLoaded(true)
    image.src = src
  }, [])
```

Ahora añadimos un renderizado condicional para saber cuando tenemos que renderizar nuestro componente.
```
{imageLoaded ? <Img src={cover} /> : <div />}
```

Antes de mejorar el aspecto visual, vamos a crear nuestro primer Custom Hook. Los Custom Hooks son funciones que nos permiten extraer lógica de nuestros componentes que sean reusables. En este caso, podría ser que en otro componente queramos contar con la funcionalidad de detectar si la imagen se ha cargado antes de mostrarla. Así que vamos a crear la carpeta `hooks` dentro de `src` y allí vamos a crear el custom hook `useImageIsLoaded`.

Es importante notar que los customHooks deben empezar con la palabra `use` para que React los detecte.

Extraemos el contenido que teníamos antes en el componente a este fichero y finalmente importamos el hook `useImagesIsLoaded` en el componente para poder usarlo.

Ahora que ya hemos creado nuestro primero custom Hook, vamos con el aspecto visual. Al ver el efecto, podemos comprobar que da un pequeño salto, lo vamos a solucionar usando un placeholder, de forma que la imagen al cargarse no dé un salto.

Este placeholder lo creamos en el archivo styles.js y tendrá casi los mismos estilos que la imagen. Como tienen los mismos estilos y gracias a la potencia de utilizar CSS en Javascript, vamos a poder reusar gran parte de las propiedades si lo extraemos en una constante.

Luego lo importamos y lo usamos en nuestro componente.

{imageLoaded ? <Img src={cover} /> : <Placeholder />}

Ahora el efecto está bastante mejor, pero faltaría darle una pequeña animación para que la carga sea mucho más suave. Para ello, vamos a utilizar el método keyframes de styled-componentes en `styles.js`

```
const fadeIn = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0px);
    opacity: 1;
  }
`
```

Esta animación tenemos que indicar que queremos que la utilice la Imagen. Para ello actualizamos sus estilos y le añadimos la siguiente línea:

`animation: 1s ${fadeIn} ease;`

Ahora, vamos a hacer que podamos ver la lista en una sola línea para dejarla lista. Volvemos a los estilos de ListOfCategories. Hay que arreglar los estilos de la lista y de cada item. Para la lista, hacemos que el contenedor sea flex. También queremos ocultar 

```
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
`
```

Por otra parte, vamos a hacer que los items de la lista tengan un poco más de espacio.

```

export const Item = styled.li`
  margin: 0px 8px;
`
```

Ahora, vamos a pasar a crear la NavBar. Creamos la carpeta `NavBar` y dentro creamos el archivo `index.js` y otro `style.js` En el `style.js` vamos a exportar dos componentes, uno será la `Nav` y otro será el `Button`. Por ahora los dejamos vacíos. Vamos a nuestro archivo `index.js`. 


Para los iconos vamos a usar la librería `react-icons`: https://react-icons.netlify.com/#/ Esta librería nos proporcionan diferentes colecciones de iconos. En este proyecto vamos a trabajar con los iconos de Material Design.

```
npm install react-icons --save
```

Después, importamos los iconos que queremos utilizar:
```
import { MdHome, MdSearch, MdFavoriteBorder } from 'react-icons/md'
```

Y le pasamos por prop el tamaño que queremos que tengan.

Aunque todavía no tenemos navegación, queremos que nuestra NavBar nos indique en qué página estamos. Para ello al botón le vamos a pasar una propiedad y, gracias a esta propiedad, podremos estilar un pequeño punto que nos indicará que está activo.

```
<Button active><MdHome size={ICON_SIZE} /></Button>
```

Ahora, volvemos al `styles.js` y ahí añadimos los estilos necesarios para mostrar un punto debajo del icono en el caso que sea la sección en la que actualmente nos encontramos.

```
  &:after {
    bottom: 0;
    content: '●';
    font-size: 10px;
    left: 0;
    opacity: ${props => props.active ? 1 : 0};
    position: absolute;
    right: 0;
  }
```

Con esto, ya estamos preparados para crear la tarjeta de una foto. Vamos a crear el componente <PhotoCard>. Para ello creamos la carpeta `PhotoCard` y creamos los archivos `styles.js` y `index.js`.

Primero, en `styles.js` vamos a crear los componentes que vamos a usar. Estos serán un `article`, un `img` y un `footer`, que nos servirá para meter los botones. Por ahora sólo los exportamos, ya le añadiremos los estilos correctos más adelante.

Vamos al archivo `index.js` y hacemos la primera versión de nuestro componente. Importaremos el icono `MdFavoriteBorder` para mostrar los likes de la foto y usaremos los componentes estilados que hemos creado en nuestro archivo styles.

```
import React from 'react'

import { MdFavoriteBorder } from 'react-icons/md'

import { Article, Button, Img, Footer } from './styles'

const SIZE_ICONS = '24px'

export default function PhotoCard ({ id, likes = 0, src }) {
  return (
    <Article>
      <Img src={src} />
      <Footer>
        <Button><MdFavoriteBorder size={SIZE_ICONS} /><span>{likes} likes!</span></Button>
        <Button><MdSend size={SIZE_ICONS} /></Button>
      </Footer>
    </Article>
  )
}
```

Ahora, vamos a nuestro componente `App` y usamos este componente. También vamos a recuperar los datos de prueba que tenemos en local para ver cómo queda nuestro componente.

```
import { photos } from './mock-data'

<PhotoCard {...photos[0]} />
```

Al ver los cambios, ya tenemos el componente en la aplicación pero como podemos ver dista mucho de ser lo que necesitamos. Vamos a trabajar en los estilos en `styles.js` para hacer que quede mucho mejor.

Primero, vamos a darle un poco de espacio al `Article`:
```
export const Article = styled.article`
  padding: 16px;
`
```

A la imagen, le damos un border-radius, una sombra y hacemos que se adapte mejor a la pantalla.

```js
export const Img = styled.img`
  border-radius: 10px;
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`
```

Ahora nos queda la parte de abajo de la card. En esta parte tenemos los botones, vamos a hacer que sea una caja flexible, de forma que los botones queden cada uno a cada extremo. Le damos un pequeño padding para separarlo.

```js
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`
```

Finalmente, a los botones, para alinearlos verticalmente los hacemos inline-flex y alineamos los elementos al centro. En los styled-components podemos también seleccionar un elemento que quede dentro, de esta forma vamos a estilar los elementos span dentro de este botón, para añadirle un pequeño margen.

```js
export const Button = styled.button`
  align-items: center;
  display: inline-flex;
  & span {
    margin-left: 4px;
  }
`
```

Ya tenemos el estilo listo. Ha quedado bien, ¿verdad?. Aunque, como podemos ver, todavía no funcionan los botones. Vamos a darle un poco de vida, utilizando un estado local, de forma que cada vez que hagamos un click en el botón de "Me gusta", tengamos al menos la sensación de que algo está ocurriendo.

Primero, importamos el hook `useState` en la primera línea:
```js
import React, { useState } from 'react'
```

Después, añadimos dos estados. Uno, para tener la cuenta y el otro para saber si ya le hemos dado like o no.

```js
const [countLikes, setCountLikes] = useState(likes)
const [liked, setLiked] = useState(false)
```

Ahora, vamos a crear una función `onClickLike`, que le pasaremos al botón, de forma que actualice el estado según la acción del usuario.

```js
const onClickLike = () => {
  setCountLikes(countLikes + 1)
  setLiked(true)
}
```

Y finalmente le pasamos al botón que, al hacer click, ejecute esa función:

```js
<Button onClick={onClickLike}>
```

Ahora vemos que se incrementan los likes pero el icono sigue igual. Vamos a arreglarlo. Importamos el icono `MdFavorite` y hacemos una ternaria, de forma que cargamos un componente u otro dependiendo si nos ha gustado la foto.

```js
const FavIcon = liked
  ? <MdFavorite size={SIZE_ICONS} fill='red' />
  : <MdFavoriteBorder size={SIZE_ICONS} />

... 

<FavIcon size={SIZE_ICONS} /><span>{countLikes} likes!</span>
```

Como no queremos poder hacer un incremento de los likes de forma infinita, lo que vamos a hacer es controlar si se debe quitar el like o añadir dependiendo del state.

```js
const onClickLike = () => {
  const op = liked ? -1 : 1
  setCountLikes(countLikes + op)
  setLiked(!liked)
}
```

Después de hacer los cambios, y para terminar la página de inicio, vamos a crear el componente <ListOfPhotoCards />, este componente es el que listará todas las fotos. Para ello, creamos el directorio `ListOfPhotoCards`. Allí creamos dos archivos, uno el `styles.js` y otro el `index.js`.

En `styles.js` vamos a crear dos componentes estilados. Uno será una Lista y el otro un Item. Por ahora los exportamos y ya está, dejándolos vacíos.

```js
import styled from 'styled-components'

export const List = styled.ul``
export const Item = styled.li``
```

Ahora, ya podemos ir a nuestro archivo `index.js`. Vamos a importar todas las dependencias necesarias, entre ellas los datos que tenemos en local que nos servirá para poder tener algo de información a usar en nuestro componente, los componentes estilados que tenemos y el componente `<PhotoCard>` que hicimos antes.

```
import React from 'react'
import { List, Item } from './styles'

import PhotoCard from '../PhotoCard'
import { photos as photosData } from '../../mock-data'
```

Después, creamos nuestros componentes y hacemos que por defecto tome el valor de photosData.

```js
export default function ListOfPhotoCards ({ photos = photosData } = {}) {
  return (
    <List>
      {photos.map(photo => <Item key={photo.id}>
        <PhotoCard {...photo} />
      </Item>)}
    </List>
  )
}
```

