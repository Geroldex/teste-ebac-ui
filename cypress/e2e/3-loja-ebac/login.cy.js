

///<reference types="cypress"/>

describe('Funcionalidade: Login' , ( ) => { 

    it ('Deve Fazer Login com Sucesso', () =>{
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username'). type ('henrique.teste@teste.com.br')
        cy.get('#password'). type ('Baranga1')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, henrique.teste (não é henrique.teste? Sair)')      
    } )
} )

 