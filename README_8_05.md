Nuestra aplicación ya va tomando forma pero antes de lanzarla vamos a conseguir convertirla en una Progressive Web App.

Para saber cómo de lejos estamos de conseguirlo, vamos a servir nuestra página web estática con `npm run serve:dev` y vamos a ejecutar las herramientas de Lighthouse. 

Nos habla de offline, que arreglaremos más adelante. La redirección nos lo solucionará Now cuando hagamos el deployment y ahora vemos que nos indica que no tenemos un archivo manifest. Vamos a solucionarlo. Para conseguir esto, vamos a usar un plugin de Webpack que nos va a generar un archivo manifest.json.

Vamos a instalarlo con:
```
npm install webpack-pwa-manifest -D
```

Ahora, nos faltaría configurarlo. Vamos al `webpack.config.js` e importamos el plugin:

```js
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
```

Ahora añadimos al array de `plugins` el uso del `WebpackPwaManifestPlugin` y le indicamos los diferentes campos.

```js
new WebpackPwaManifestPlugin({
  name: 'Petgram - Tu app de fotos de mascotas',
  shortname: 'Petgram 🐶',
  description: 'Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente',
  background_color: '#fff',
  theme_color: '#b1a',
  icons: [
    {
      src: path.resolve('src/assets/icon.png'),
      sizes: [96, 128, 192, 256, 384, 512]
    }
  ]
})
```

Volvemos a servir nuestros estáticos y ahora podemos observar que entre nuestros elementos tenemos un archivo `manifest.json`. Además vemos que ahora tenemos un `hash` para poder cachear este archivo. El hash irá cambiando conforme el contenido de nuestro manifest cambie.

Vamos a solucionar también el aviso que no damos un contenido de respaldo cuando no está Javascript disponible en nuestro sitio.

Para ello, vamos al archivo `index.html` y usamos la etiqueta `noscript`. Esta etiqueta hará que si Javacript no está disponible, se pintará lo que contenga. De esta forma podremos avisar a los usuarios que necesitan activar Javascript para poder disfrutar de nuestra app.

```html en index.html
<noscript>
  <h3>Esta app necesita Javascript ☕️ para funcionar</h3>
</noscript>
```

Ya sólo nos falta hacer que nuestra aplicación registre un service worker y pueda funcionar de forma offline. Para ello, vamos a usar otro plugin, esta vez uno de Google, llamado Workbox Webpack Plugin, que nos va a ayudar a crear un Service Worker para cachear las requests de nuestra app.

```
npm install workbox-webpack-plugin -D
```

Vamos al archivo `webpack.config.js` y lo vamos a añadir a la lista de plugins.

```js
new WorkboxWebpackPlugin.GenerateSW({
  runtimeCaching: [
    {
      urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'images'
      }
    },
    {
      urlPattern: new RegExp('https://petgram-api.midudev.now.sh'),
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api'
      }
    }
  ]
})
```

Sólo nos falta añadir el uso de este `service-worker` en nuestra página `index.html`. Primero comprobamos si el navegador es compatible con los Service Workers y luego registraremos el service worker que hemos creado.

```js en index.html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
    })
  })
}
</script>
```

Podemos volver a servir la página para ver cómo nos está quedando la puntuación de Lighthouse y ver cómo responde el Service Worker.

Ahora, si te interesa el tema, en Platzi puedes encontrar un curso completo sobre cómo realizar PWAs con React de forma mucho más completa.