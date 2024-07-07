/// <reference types="cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit(' http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Jose')
    cy.get('#signup-lastname').type('Antonio')
    cy.get('#signup-email').type('email3@teste.com')
    cy.get('#signup-phone').type('789795451')
    cy.get('#signup-password').type('Teste@1092')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
})