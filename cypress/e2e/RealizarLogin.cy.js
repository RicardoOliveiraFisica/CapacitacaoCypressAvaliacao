/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'

describe('Realizar Login', function(){
    
    before(function(){
          cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
          })
    }) 

    beforeEach(function(){
          Login.acessarURL('/login')
          cy.url().should('include', 'automationexercise')
    })


    it("Realizar Login com sucesso", function(){
        Login.preenherEmail(this.credenciaisExt.email.email_valido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
        Login.clicarEmLogin()
        Login.verificarLoginSucesso()
    })


    it.only("Realizar Login com falha", function(){
        Login.preenherEmail(this.credenciaisExt.email.email_invalido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_invalido)
        Login.clicarEmLogin()
        Login.verificarLoginFalha()
    })
})