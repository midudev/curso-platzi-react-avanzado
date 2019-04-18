# 01

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
console.log('Hola 🎉')
```

Instalamos las dependencias de webpack necesarias:
```
npm install webpack webpack-cli --save-dev
```

Esto nos habrá instalado en node_modules todas las dependencias necesarias. Vamos a ejecutar ahora webpack en la terminal. Para ello tenemos que acceder a `./node_modules/.bin/wepback`.

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

Ahora en el archivo `webpack.config.js` vamos a cargar y usar este nuevo plugin.

```
const HtmlWebpackPlugin = require('html-webpack-plugin')

// ...
  plugins: [new HtmlWebpackPlugin()]
```

Ya podemos volver a empaquetar nuestra aplicación para ver qué ocurre con esto. Y podremos observar que en la carpeta `dist` ahora tenemos un archivo `index.html` donde tiene inyectado el `<script>` con el bundle.

Instalamos el servidor de desarrollo de webpack.
```
npm install webpack-dev-server --save-dev
```

Nuestra aplicación la vamos a crear usando react, por lo que necesitamos instalar las dependencias necesarias.

```
npm install react react-dom
```

Vamos a comprobar que todo funciona correctamente. Para ello, vamos a ir al punto de entrada de nuestra aplicación

```js
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>Hola Platzi!</h1>, document.body)
```

Si iniciamos el servidor de desarrollo con `npm run dev` veremos que nos devuelve un error y nos indica que nos falta un loader para Webpack. Esto es porque no ha entendido la sintaxis de JSX y, por lo tanto, necesitamos hacer una transformación de este código a uno que pueda entender el navegador.

Para ello, necesitamos instalar Babel. Para poder usarlo, instalaremos el motor de Babel, el loader para ser usado en Webpack y un par de presets que ya viene con las configuraciones necesarias para React y para soportar las nuevas sintaxis de Javascript.

```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
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

Con esto ya tendríamos el comienzo de nuestra aplicación de React. Antes de continuar, vamos a hacer que la experiencia de desarrollo sea la adecuada instalando eslint y prettier.

```
npm install prettier eslint --save-dev
```
