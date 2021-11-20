## curso-platzi-react-avanzado ⚛️

**¡Sígueme en Youtube para más contenido de React y Javascript!** 👉 https://www.youtube.com/midudev

**¡Sígueme en Twitch para streams sobre desarrollo web!** 👉 https://www.twitch.tv/midudev

Repositorio con el código del [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)

Dependencias instaladas al iniciar

-webpack
-webpack-cli --save -dev

comando para compilar con webpack un archivo especifico
./node_modules/.bin/webpack ./src/index.js

instalamos otra dependencia
npm instlal html-webpack-plugin --save -dev

para usar este plugin, necesitamos crear un archivo de nombre webpack.config.js
allí se configuran las dependencias y como se llamará el compilado final

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    output:{
        filename: 'app.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}

para finalizar se actualizar package, para crear el script build, que solo tendrá "build": "webpack"
se instala también npm i webpack-dev-server --save-dev


instalar dependencias de react react-dom
instalar dependencia de babel para poder usar jsx , @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev
instalando linter standar     , npm i standard --save -dev


Hooks 
Son funciones que nos permiten acceder a casi todas las características de React desde componentes funcionales

por que casi todas?
no puedes utilizar el getSnapshotBeforeUpdate ni el componentDidCatch

Hooks principales
useState: añadir un estado local en tu componente
useEffect: que nos permite ejecutar una funcion cada que  renderizemos nuestro component
useContext: permite acceder a la context API para acceder a ciertos valores en toda la aplicación sin tener que pasarlas por las props

