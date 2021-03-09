/* global describe, it, cy */

describe('Petgram', () => {
    it('to see if the app works', () =>{
        cy.visit('/')
    })

    it('We browse the categories and see photos', () =>{
        cy.visit('/pet/1')
        cy.get('article')
    })
    it('Can navigate to Home using Navbar', () =>{
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('eq', Cypress.config().baseUrl);
    })
    it('Unregistered users see the registration and login form when they go to Favs', () =>{
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})