/// <reference types="cypress"/>
describe('funcionalidade: produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('deve selecionar um produto da lista', () => {
        cy.get(' .product-block ')
            //.first()
            //.last()
            //.eq(2)
            .contains('Argus All-Weather Tank')
            .click()

            cy.get('#tab-title-description > a').should('contain' , 'Descrição')

    });
});