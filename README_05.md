# 05

Crear archivos ` y indexServer.js

Instalar el paquete @babel/register.

En el archivo indexServer.js, 

```js
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['babel-plugin-styled-components']
})
require('./server')
```

Ahora, pasamos al archivo `server.js`, allí lo que vamos a hacer es 