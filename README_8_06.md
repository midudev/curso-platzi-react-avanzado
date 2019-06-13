Para asegurarnos que nuestra aplicación funciona correctamente podemos añadir algunos tests. Para ello vamos a usar Cypress. Cypress es un framework de código abierto que nos permite hacer tests end to end de una forma rápida y sencilla. ¡Vamos a verlo!

Lo primero que tenemos que hacer es instalar cypress desde la terminal y guardarla como dependencia de desarrollo.
```bash
npm install cypress -D
```

Ahora lo podemos ejecutar cypress con el siguiente comando.
```bash
./node_modules/.bin/cypress open
```

Mientras se abre, vamos a ir a nuestro archivo `package.json` y vamos a añadir en el script de test este mismo comando para no tener que volver a ejecutarlo de forma manual.

```json package.json
  "test": "cypress open",
```

```js
describe('Mi primer test', function () {
  it('para ver si funciona', function () {
    expect(true).to.equal(true)
  })
})
```

```json cypress.json
{
  "baseUrl": "https://petgram.midudev.now.sh",
  "chromeWebSecurity": false,
  "viewportWidth": 500,
  "viewportHeight": 800
}
```

Para solucionar los problemas de linter:
```js
/* global describe, it, expect */
```

Test real:
```js
describe('Petgram', function () {
  it('Returns the app on visited', function () {
    cy.visit('/')
  })
})
```

```js
it('navigate to a category and see cards', function () {
  cy.visit('/pet/1')
  cy.get('article')
})
```

```js
it('navigate using the navbar to the home', function () {
  cy.visit('/pet/1')

  cy.get('nav a').first().click()
  cy.url().should('include', '/')
})
```

```js
it('A non registered user see forms to register and login on favs page', function () {
  cy.visit('/favs')
  cy.get('form').should('have.length', 2)
})
```
