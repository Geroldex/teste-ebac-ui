///<reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')


describe('Funcionalidade: Login' , ( ) => { 

    beforeEach(() => {
        cy.visit ('minha-conta')

    });
    afterEach(() => {
        cy.screenshot()
    });
    it ('Deve Fazer Login com Sucesso', () =>{ 
        cy.get('#username'). type ('henrique.teste@teste.com.br')
        cy.get('#password'). type ('Baranga1')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, henrique.teste (não é henrique.teste? Sair)')      
    } )

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {        
        cy.get('#username'). type ('fabioe@teste.com.br')
        cy.get('#password'). type ('Baranga1')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error > li').should('exist')
    });
it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username'). type ('henrique.teste@teste.com.br')
    cy.get('#password'). type ('teste123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail henrique.teste@teste.com.br está incorreta. Perdeu a senha?' )
    
});
 it('Deve fazer login com sucesso  - Usando massa de dados', () => {
    cy.get('#username'). type (perfil.usuário)
    cy.get('#password'). type (perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, henrique.teste (não é henrique.teste? Sair)')   
 });
  it('Deve fazer login com sucesso  - Usando fixture', () => {
    cy.fixture('perfil').then(dados => {
    cy.get('#username'). type (dados.usuário, {log : false})
    cy.get('#password'). type (dados.senha, {log : false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, henrique.teste (não é henrique.teste? Sair)') 

    })
    
  });   
 
  it.only('Deve fazer Login com sucesso  - Usando comandos customizados', () => {
    cy.login('henrique.teste@teste.com.br','Baranga1')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, henrique.teste (não é henrique.teste? Sair)') 
    
});


} )

 