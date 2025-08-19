const el = require('./elements').ELEMENTS
class Checkout {

    verificarCheckoutSucesso(){
        cy.url().should('include', '/checkout')
    }

    verificarCarrinhoNaoVazio(){
        cy.get(el.cart_info).should('be.visible').then($products => {
            cy.log('Produtos no carrinho: ' + ($products.length - 1))
            expect($products.length - 1).to.be.greaterThan(0)
        })
    }

    clicarEmCheckout(){
        cy.get(el.placeOrder).should('be.visible').click()
    }

}
export default new Checkout()