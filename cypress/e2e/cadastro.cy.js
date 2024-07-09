/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
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
    var email = `fabio${Date.now()}@teste.com`
    var senha = `Teste@${Date.now()}`

    cy.preencherCadastro('Fabio', 'Araujo', email, '1213215', senha)
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  });

  it('Deve validar senha fraca', () => {
    var email = `fabio${Date.now()}@teste.com`
    var senha = `teste${Date.now()}`
    cy.preencherCadastro('Fabio', 'Araujo', email, '1213215', senha)
    cy.get('#signup-response').should('contain','Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });
})