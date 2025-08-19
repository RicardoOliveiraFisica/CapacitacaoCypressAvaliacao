/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import CategoryProducts from '../support/Pages/CategoryProducts'

describe('Realizar Compra', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      // impede falha por erro de JS da página
      return false
    })

    before(function(){
          cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
          })
    }) 

    beforeEach(function(){
          Login.acessarURL('/login')
          cy.url().should('include', 'automationexercise')
    })


    it("Realizar Compra com sucesso", function(){
            Login.preenherEmail(this.credenciaisExt.email.email_valido)
            Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
            Login.clicarEmLogin()
            Login.verificarLoginSucesso()
            CategoryProducts.selecionarCategoriaAleatoria()
            CategoryProducts.clicarNoProdutoAleatorio()
            CategoryProducts.verificarProdutoAdicionadoAoCarrinhoSucesso()
    })

})