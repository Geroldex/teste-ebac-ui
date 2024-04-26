///<reference types="cypress"/>

describe('Funcionalidade: detalhes da conta', () => {
  
  beforeEach(() => {
    cy.visit('minha-conta/edit-account')
    cy.fixture('perfil').then(login =>{
      cy.login('henrique.teste@teste.com.br','Baranga1')
    })
   
  });

  it('Deve completar da conta com sucesso', () => {
    cy.detalhesConta('Henrique' ,'Geroldo', 'Geroldex')
    cy.get('.woocommerce-message').should('contain' ,'Detalhes da conta modificados com sucesso.')
  });
});
    