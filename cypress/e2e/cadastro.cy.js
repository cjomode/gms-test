/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email = `fabio${Date.now()}@teste.com`

    cy.preencherCadastro('Fabio', 'Araujo', email, '21654987', 'Teste@983')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
  
  it.only('Deve validar mensagem de erro com campo nome inválido', () => {
    cy.preencherCadastro('Fabio20', 'Araujo', 'fabio@teste.com', '21654987', 'Teste@983')
    cy.get('#signup-response').should('contain','Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

})