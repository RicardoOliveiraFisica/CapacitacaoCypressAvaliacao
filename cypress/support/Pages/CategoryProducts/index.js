const el = require('./elements').ELEMENTS
class CategoryProducts {

    selecionarCategoriaAleatoria(){
        cy.get(el.category).then($categories => {
            cy.log('Categorias disponíveis: ' + $categories.length)
            let index = Cypress._.random(0, $categories.length - 1)
            cy.wrap($categories).eq(index).find('.panel-heading a').click()
            cy.wrap($categories).eq(index).find('.panel-collapse a').then(($subCategorias) => {
                cy.log('Subcategorias disponíveis: ' + $subCategorias.length)
                let subIndex = Cypress._.random(0, $subCategorias.length - 1)
                cy.wrap($subCategorias).eq(subIndex).click()
            })
        })
    }

    selecionarTipoProdutoAleatorio(){
        cy.wrap(el.subCategory).then($products => {
            cy.log('Subcategorias  disponíveis: ' + $products.length)
            let index = Cypress._.random(0, $products.length - 1)
            cy.wrap($products).eq(index).click()
        })
    }

    clicarNoProdutoAleatorio(){
            cy.get(el.product).should('have.length.greaterThan', 0).then($products => {
            cy.log('Produtos disponíveis: ' + $products.length)
            let index = Cypress._.random(0, $products.length - 1)
            cy.wrap($products).eq(index).find('a.add-to-cart').first().click({ force: true })  
        })
    }

    verificarProdutoAdicionadoAoCarrinhoSucesso() {
        cy.get(el.showCart).should('be.visible').click()
    }

}
export default new CategoryProducts()