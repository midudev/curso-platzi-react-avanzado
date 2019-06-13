/* global describe, it, expect, cy */

describe('Petgram', function () {
  it('The app could be visited', function () {
    cy.visit('/')
  })

  it('Could navigate to a category and see cards', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Could navigate using the navbar to the home', function () {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })

  it('A non registered user see forms to register and login on favs page', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
