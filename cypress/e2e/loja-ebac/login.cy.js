/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('deve fazer login com sucesso - usando massa de dados', () => {
    cy.get('#username').type(perfil.uruario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, derick.texte (não é derick.texte? Sair)')  
    });

    it('deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.uruario , {log: false})
            cy.get('#password').type(dados.senha , { log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, derick.texte (não é derick.texte? Sair)')  


        })
        
    });

    it('deve fazer login com sucesso - Usando Comandos customizdos', () => {
        cy.login('derick.texte@gmail.com' , 'senha12345@')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, derick.texte (não é derick.texte? Sair)')
    });


})