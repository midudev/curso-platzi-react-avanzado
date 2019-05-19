Iniciamos el proyecto con:
```
npm init
```

Abrimos el editor de código:
```
code .
```

Creamos la carpeta `src` que es donde vivirá el punto de entrada de nuestra aplicación. Vamos a crear el archivo `index.js` con este contenido:

```
console.log('Empezamos ⚛️')
```

Instalamos las dependencias de webpack necesarias:
```
npm install webpack webpack-cli --save-dev
```

Esto nos habrá instalado en `node_modules` todas las dependencias necesarias. Vamos a ejecutar ahora webpack en la terminal. Para ello tenemos que acceder a `./node_modules/.bin/wepback`.

Tras unos segundos nos empaquetará nuestra aplicación y nos dice que nos la ha dejado en la carpeta `dist/main.js`. Vamos a ejecutarlo con node para ver si sigue funcionando.

```
node dist/main.js
```

Vamos a pasar este comando al package.json, de forma que lo podamos ejecutar a través de los comandos de npm. Aprovechamos a añadir el parámetro p para que nos optimice el paquete para producción.

```
"build": "webpack -p"
```

Hasta ahora hemos conseguido crear el paquete de nuestra aplicación pero recordemos que nuestra app necesita como base un archivo HTML para funcionar, así que vamos a querer tener un index.html dónde se cargue nuestro bundle generado. Para conseguirlo, vamos a instalar el plugin `html-webpack-plugin`.

```
npm install html-webpack-plugin --save-dev
```

Ahora creamos el archivo `webpack.config.js` vamos a cargar y usar este nuevo plugin.

```
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
```

Ya podemos volver a empaquetar nuestra aplicación para ver qué ocurre con esto. Y podremos observar que en la carpeta `dist` ahora tenemos un archivo `index.html` donde tiene inyectado el `<script>` con el bundle. Este archivo `index.html` ha sido creado por una plantilla por defecto pero, como verás más adelante, podemos cambiar y crear una propia.

Además, podemos abrir el archivo `index.html` en nuestro navegador para ver que todo está funcionando correctamente.

Instalamos el servidor de desarrollo de webpack.

```
npm install webpack-dev-server --save-dev
```

Añadimos el script `dev` en el package.json para inicializar nuestra aplicación en modo desarrollo:
`"dev": "webpack-dev-server --mode development"`

Nuestra aplicación la vamos a crear usando react, por lo que necesitamos instalar las dependencias necesarias.

```
npm install react react-dom
```

Vamos a comprobar que todo funciona correctamente. Para ello, vamos a ir al punto de entrada de nuestra aplicación

```js
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render('Hola Platzi!', document.body)
```

Vamos a abrir las herramientas de desarrollo. Nos dice que no es recomendable renderizar componentes directamente en el elemento <body> del componente, ya que suelen ser manipulados por scripts de terceros y puede traernos problemas en el futuro. Para solucionarlo, vamos a tener que generar nuestro propio index.html.

Para eso, tenemos que crear un archivo `index.html` en la carpeta `src`. Utilizamos la abreviación de Emmet para crear una plantilla desde cero. Vamos a cambiarle el título por el nombre de nuestra aplicación y vamos a crear un `<div id='app'></div>` donde renderizaremos nuestra aplicación. Ahora, para que usar esta plantilla, deberás actualizar el archivo `webpack.config.js`. Allí en la sección de plugins, tenemos que pasarle una nueva configuración al plugin de Html para indicarle qué template queremos que utilice.

```json
plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })]
```

Recargamos el servidor de desarrollo para que tome los cambios y vemos que ahora está utilizando nuestra plantilla HTML. Ahora, para eliminar la advertencia, vamos al archivo `index.js` y allí le indicamos dónde queremos que se renderice nuestro elemento, que será en el div que hemos creado.

```js
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render('Hola Platzi!', document.getElementById('app'))
```

Ya está funcionando pero ahora lo que nos gustaría realmente es empezar a utilizar JSX en nuestro proyecto, vamos a cambiar el mensaje para intentar renderizar un elemento h1 con el mismo mensaje que teníamos antes.

`ReactDOM.render(<h1>Hola Platzi!</h1>, document.getElementById('app'))`

Si iniciamos el servidor de desarrollo con `npm run dev` veremos que nos devuelve un error y nos indica que nos falta un loader para Webpack. Esto es porque no ha entendido la sintaxis de JSX y, por lo tanto, necesitamos hacer una transformación de este código a uno que pueda entender el navegador.

Para ello, necesitamos instalar Babel. Para poder usarlo, instalaremos el motor de Babel, el loader para ser usado en Webpack y un par de presets que ya viene con las configuraciones necesarias para React y para soportar las nuevas sintaxis de Javascript.

```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
```

Ya ha terminado la instalación y ahora nos toca cambiar la configuración de webpack para que use este loader y los presets que hemos instalado previamente.

```
  module: {
    rules: [
      {
        test: /\.js$/, // para los archivos que terminan con la extensión JS
        exclude: /node_modules/, // excluimos los directorios de node_modules
        use: {
          loader: 'babel-loader', // usamos el loader de Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
```

Si volvemos a levantar el servidor de desarrollo de Webpack, veremos que ahora sí ha compilado correctamente nuestra aplicación. Y accediendo a localhost:8080 veremos nuestra aplicación con el mensaje que esperamos.

Con esto ya tendríamos el comienzo de nuestra aplicación de React.