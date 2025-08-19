const el = require('./elements').ELEMENTS
class ViewCart {

    verificarCarrinhoSucesso(){
        cy.url().should('include', '/view_cart')
    }

    clicarEmCheckout(){
        cy.get(el.checkout).should('be.visible').click()
    }

}
export default new ViewCart()