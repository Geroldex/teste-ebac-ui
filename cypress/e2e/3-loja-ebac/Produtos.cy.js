///<reference types="cypress"/>

describe('Funcionalidade- Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        
    });

    it('Deve selecionar um produtos da lista', () => {
        cy.get('.product-block ')
        //.first()
        //.last()
        //.eq(3)
        .contains('Argus All-Weather Tank')
        .click()
        cy.get('#tab-title-description > a').should('contain','Descrição')
    });
    
});