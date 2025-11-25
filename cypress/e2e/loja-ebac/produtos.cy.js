/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";


describe('funcionalidade: produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
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

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('')
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto()
    });

    it('Deve adicionar o produto ao carrinho', () => {
        
    });
});