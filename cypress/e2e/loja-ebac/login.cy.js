/// <reference types="cypress"/>

describe('funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('derick.texte@gmail.com')
        cy.get('#password').type('senha12345@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, derick.texte (não é derick.texte? Sair)')
    })

    it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('derick@gmail.com')
        cy.get('#password').type('senha12345@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('derick.texte@gmail.com')
    cy.get('#password').type('senha0000')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail derick.texte@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
    });

})