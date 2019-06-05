Si navegamos por nuestra app, veremos que el título de nuestra página nunca cambia. De hecho, no hemos hecho ningún trabajo en cuanto a SEO. A veces existe la creencia que en React no se puede trabajar bien con el SEO pero eso es porque no conocen componentes como React Helmet. ¡Vamos a instalarlo y usarlo en nuestro proyecto!

```
npm install react-helmet
```

Vamos a mejorar el título y la descripción de nuestra página `Home`.

```js
import React, { Fragment } from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

export const Home = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}
```

Lo mismo podríamos hacer con la página de detalle, para que cambie el título para cada página, por ejemplo:

```js
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { PhotoCardWithQuery } from '../../containers/PhotoCardWithQuery'

export const Detail = ({ id }) => {
  return <Fragment>
    <Helmet>
      <title>Fotografía {id} | Petgram</title>
    </Helmet>
    <PhotoCardWithQuery id={id} />
  </Fragment>
}
```

Helmet lo podemos usar en cualquier nivel de nuestro árbol de elementos, de forma que automáticamente cambiará las etiquetas. Por ejemplo, vamos a crear un componente llamado `Layout` que nos va a solucionar el problema de espacio de algunas de nuestras páginas y, además, nos servirá para que el título que le pasemos se utilice también como etiqueta title.

```js
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, subtitle, title }) => (
  <Fragment>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    <div>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
      {children}
    </div>
  </Fragment>
)
```

Esto lo podríamos usar, por ejemplo, en nuestro formulario de registro e inicio de sesión. Para ello, vamos a envolver el componente con este nuevo componente Layout.

```js
import { Layout } from '../../components/Layout'

<Layout title='Autentificación' subtitle='Inicia sesión o regístrate en Petgram para poder acceder a esta sección'>
  <RegisterMutation>
    {...}
</Layout>
```

Ahora que vemos como funciona, vamos a hacer los cambios necesarios a los estilos para que quede mejor integrado en nuestro sitio.

```js
import styled from 'styled-components'

export const Div = styled.div`
  padding: 16px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 8px;
`

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 4px;
`
```

Y estos estilos los usamos en nuestro componente:

```js
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, subtitle, title }) => (
  <Fragment>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    <Div>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Div>
  </Fragment>
)
```

Ahora, podemos seguir usando este componente `Layout` en todas las secciones:
- Detail
- Profile
- Favs


