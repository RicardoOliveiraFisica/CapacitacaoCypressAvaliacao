const el = require('./elements').ELEMENTS
class Payment {

    preencherInfoCard(card_name, card_number, cvc, expiry_month, expiry_year){
        cy.get(el.nameOnCard).type(card_name)
        cy.get(el.cardNumber).type(card_number)
        cy.get(el.cvc).type(cvc)
        cy.get(el.expiryMonth).type(expiry_month)
        cy.get(el.xpiryYear).type(expiry_year)
    }
    
    clicarEmPagarEConfirmar(){
        cy.get(el.payButton).should('be.visible').click()
    }

    verificarPagamentoSucesso() {
        cy.get(el.paymentSuccess).should('be.visible').should('have.text', 'Order Placed!')
        cy.url().should('include', '/payment_done')
        cy.get(el.buttonContinue).should('be.visible').click()
    }

}
export default new Payment()