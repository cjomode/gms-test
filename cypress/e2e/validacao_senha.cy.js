/// <reference types="cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#signup-firstname').type('Luana')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('luana@teste.com')
    cy.get('#signup-phone').type('1243452465')
    cy.get('#signup-password').type('teste123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
})