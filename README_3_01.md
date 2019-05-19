Primero revisamos el diseño que ya hemos creado. Identificamos los componentes que queremos crear en la home.

Primero, vamos a separar el punto de entrada de nuestra aplicación de forma que lo que renderizaremos no será el <h1> si no el componente App. Creamos el archivo App.js y este componente lo dejaremos en la raíz de src y será donde empezaremos a usar los componentes de React que vamos a ir creando para crear la página de inicio de nuestra app.

Ahora, creamos la carpeta /components. El primero que haremos es el Category.

Creamos el archivo `index.js` que tendrá nuestro componente:

```js
import React from 'react'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const Category = ({ path, cover = DEFAULT_IMAGE, emoji = '❓' }) => (
  <a href={path}>
    <img src={cover} />
    {emoji}
  </a>
)
```

Lo usamos en el componente <App />

Parar el entorno de desarrollo e instalar styled-components:

```
npm install --save styled-components
```

Instalar el plugin de Babel con soporte a styled components que ofrece server-side rendering, minifación de los estilos y una mejor experiencia de desarrollo.

```
npm install --save-dev babel-plugin-styled-components
```

Para activar esta transformación, debemos modificar el archivo `webpack.config.js`, y añadir en la lista de plugins de babel que queremos utilizar este.

```
plugins: ['babel-plugin-styled-components']
```

Recomendar instalar alguna extensión en editor para ayudaros con el desarrollo de los styled-componentes. En mi caso tengo la extensión vscode-styled-components que me ayuda con la sintaxis.

Tras esto, vamos a reiniciar el entorno de desarrollo para que tome las dependencias que hemos instalado y la nueva configuración.

Ahora vamos a usar styled-components para estilar nuestro primer componente.

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

A partir de ahora, vamos a separar los conceptos de nuestros componentes, de forma que en el index.js vamos a tener el componente y en el archivo styles.js tendremos los estilos de ese componente. Creamos el archivo styles.js en el mismo directorio con este contenido:

```js
import styled from 'styled-components'

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
```

Cada vez que creemos un nuevo componente, vamos a crear una carpeta con el nombre del componente y dentro tendremos el archivo index.js. Esto nos permitirá más adelante poder separar mejor los conceptos que podrían tener nuestros componentes.

