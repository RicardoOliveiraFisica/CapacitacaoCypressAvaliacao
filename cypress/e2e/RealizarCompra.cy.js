/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import CategoryProducts from '../support/Pages/CategoryProducts'
import ViewCart from '../support/Pages/ViewCart'
import Checkout from '../support/Pages/Checkout'
import Payment from '../support/Pages/Payment'


describe('Realizar Compra', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      // impede falha por erro de JS da página
      return false
    })

    before(function(){
            cy.fixture('credenciaisFixture').then((dados)=>{
                  this.credenciaisExt = dados
            })
            
            Login.acessarURL('/login')
            cy.url().should('include', 'automationexercise')

    }) 

    beforeEach(function(){
            cy.realizarLogin(this.credenciaisExt.email.email_valido,
                             this.credenciaisExt.passwords.password_valido)
    })


    it("Realizar Compra com sucesso", function(){
            CategoryProducts.selecionarCategoriaAleatoria()
            CategoryProducts.clicarNoProdutoAleatorio()
            CategoryProducts.verificarProdutoAdicionadoAoCarrinhoSucesso()
            ViewCart.verificarCarrinhoSucesso()
            ViewCart.clicarEmCheckout()
            Checkout.verificarCheckoutSucesso()
            Checkout.verificarCarrinhoNaoVazio()
            Checkout.clicarEmCheckout()
            Payment.preencherInfoCard(
                  this.credenciaisExt.payment.card_name,
                  this.credenciaisExt.payment.card_number,
                  this.credenciaisExt.payment.card_cvv,
                  this.credenciaisExt.payment.card_expiration_month,
                  this.credenciaisExt.payment.card_expiration_year
            )
            Payment.clicarEmPagarEConfirmar()
            Payment.verificarPagamentoSucesso()
    })

})