/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'

describe('Realizar Login', function(){
    const credenciaisObj ={
     standard: "standard_user",
     locked: "locked_out_user",
     password: "secret_sauce"
    }    

    before(function(){
          cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
          })
    }) 

    beforeEach(function(){
          Login.acessarURL()
          cy.url().should('include', 'automationexercise')
    })


    it("Realizar Login com sucesso", function(){
        Login.preenherEmail(this.credenciaisExt.email.email_valido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
        Login.clicarEmLogin()
        Login.verificarLoginSucesso(this.credenciaisExt.email.email_valido)
    })
})