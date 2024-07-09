/// <reference types="cypress"/>

describe('Validação de envio sem preencher campos obrigatorios', () => {
  it('Clicar em cadastrar sem preencher os campos obrigatorios', () => {
    cy.visit('/')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })
})