const el = require('./Pages/Login/elements.js').ELEMENTS
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('realizarLogin', (email, password) => {
    cy.get(el.email).type(email)
    cy.get(el.password).type(password)
    cy.get(el.botaoLogin).click()
})