/// <reference types="cypress"/>

describe('Validação de envio sem preencher campos obrigatorios', () => {
  it('Clicar em cadastrar sem preencher os campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })
})