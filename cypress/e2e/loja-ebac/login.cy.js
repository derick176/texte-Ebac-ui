/// <reference types="cypress"/>

describe('funcionalidade: login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('derick.texte@gmail.com')
        cy.get('#password').type('senha12345@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, derick.texte (não é derick.texte? Sair)')
        
    })

})