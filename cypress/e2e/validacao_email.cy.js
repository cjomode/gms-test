/// <reference types="cypress"/>

describe('US-012-Validação do formato de email invalido', () => {
  it('Preencher o campo email de forma inválida', () => {
    cy.visit('/')
    cy.get('#signup-firstname').type('Joao')
    cy.get('#signup-lastname').type('Pedro')
    cy.get('#signup-email').type('umteste.com')
    cy.get('#signup-phone').type('789795451')
    cy.get('#signup-password').type('Teste@1092')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })
})