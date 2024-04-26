///<reference types="cypress"/>

describe('Funcionalidade - Detalhe da conta ', () => {
    
beforeEach(() => {
    cy.visit('/minha-conta/edit-account/')
    cy.login('henrique.teste@teste.com.br' ,'Baranga1'  )
});
//it('Deve completar detalhes da conta com sucesso', () => {
  //  cy.detalhesConta('Henrique' ,'Geroldo' ,'Geroldex')
//});



});