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
  
  it('Deve validar mensagem de erro com campo nome inválido', () => {
    cy.preencherCadastro('Fabio20', 'Araujo', 'fabio@teste.com', '21654987', 'Teste@983')
    cy.get('#signup-response').should('contain','Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem de erro de campos obrigatorios vazios', () => {
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Nome não pode estar vazio')
  });

  it('Deve validar senha forte', () => {
    cy.preencherCadastro('Fabio', 'Araujo', 'fabio123@teste.com', '1213215', 'Teste!123')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  });

  it.only('Deve validar senha fraca', () => {
    cy.preencherCadastro('Fabio', 'Araujo', 'fab_teste@teste.com', '1213215', 'teste')
    cy.get('#signup-response').should('contain','Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });
})