class ProdutosPage{

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto() {
        //código
    }

    buscarProdutoLista(nomeProduto) {
       cy.get(' .product-block ')
       .contains(nomeProdutom)
       .click()
    }

    visitarProduto(nomeProduto) {
        //cy.visit(`produtos/${nomeProduto}`)

    }

    addProdutoCarrinho() {

    }

}

export default new ProdutosPage()