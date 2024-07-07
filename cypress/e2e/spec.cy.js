/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {

    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Teste')
    cy.get('#signup-lastname').type('Nobre')
    cy.get('#signup-email').type('sara9@teste.com')
    cy.get('#signup-phone').type('789795451')
    cy.get('#signup-password').type('Teste@1092')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
})