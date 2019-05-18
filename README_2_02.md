En esta clase, vamos a hacer que la experiencia de desarrollo sea la adecuada instalando Standard. Standard nos va a proporcionar unas reglas de lintado y formateo de nuestro código, basado en no usar puntos y coma, de forma que tendremos que hacer las minimas configuraciones posible. Poner puntos y coma o no en Javascript es una preferencia muy personal, en este caso voy a usar este linter, pero es tu decisión usar este u otro. Siéntete libre de usar el que más te guste.

```
npm install standard --save-dev
```

Una vez que lo tenemos instalado, lo ejecutamos por primera vez usando el comando `./node_modules/.bin/standard`.

Vamos a añadir un script en nuestro package.json para que siempre que queramos podamos lintar el código.

```json
  "lint": "standard",
```

Ahora, vamos a solucionarlos.

Esto está bien pero me gustaría contar con estos avisos directamente en el editor. Para ello, yo cuento con dos extensiones para Visual Studio Code: eslint y prettier. Sé que existe una extensión que directamente te permite usar Standard en el editor pero, en mi caso, me gusta que mi editor se pueda adaptar muy rápidamente a diferentes proyectos con configuraciones para el linter distintas.

Para que funcionen como espero, lo primero que tengo que hacer es añadir en el package.json la referencia dónde se encuentra mi configuración con las reglas del linter, de forma que mi editor las pueda encontrar para aplicarlas. Para ello en el package.json añadimos la siguiente configuración:

```json
  "eslintConfig": {
    "extends": ["./node_modules/standard/eslintrc.json"]
  }
```

Ahora, probamos a abrir el archivo `src/index.js` y probar nuestro código. Si añadimos algunos errores, veremos que nos lo muestra. Eso sí, lo que nos gustaría es que se solucionasen solos.

```
Desactivar Format on Save
Activar Prettier Eslint Integration
Activar Eslint Autofix On Save
```

Ahora que ya tenemos todo nuestro entorno preparado vamos a deployar tanto el servidor como nuestra aplicación. Para ello, vamos a utilizar el servicio de Now. Vamos a crear una cuenta totalmente gratuita, para ello, lo único que tenéis que hacer es acceder a `now.sh` y acceder con vuestra cuenta de GitHub.

Una vez le damos los permisos necesarios, vamos a ir a la sección de Tokens y creamos uno. Este token lo vamos a añadir a nuestro package.json donde ya tenemos un script que nos va a realizar el deploy de tanto el servidor como nuestra aplicación en el cliente.

```
npm run deploy
```