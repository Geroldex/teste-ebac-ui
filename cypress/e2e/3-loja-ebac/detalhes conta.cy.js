///<reference types="cypress"/>

describe('Funcionalidade: detalhes da conta', () => {
  
  beforeEach(() => {
    cy.visit('minha-conta/edit-account')
   cy.login('henrique.teste@teste.com.br' ,'Baranga1')

  });

  it('Deve completar da conta com sucesso', () => {
    
  });
});
    