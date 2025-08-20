/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import Home from '../support/Pages/Home'

describe('Realizar Login', function(){
    
    before(function(){
          
    })

    beforeEach(function(){
        cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
        })

        Login.acessarURL('/login')
        cy.url().should('include', 'automationexercise')
    })

    afterEach(function(){
          Home.clicarEmLogoutSeLogado()
    })

    it("Realizar Login com sucesso", function(){
        Login.preenherEmail(this.credenciaisExt.email.email_valido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
        Login.clicarEmLogin()
        Login.verificarLoginSucesso()
    })
    
    it("Realizar Login com falha", function(){
        Login.preenherEmail(this.credenciaisExt.email.email_invalido)
        Login.preencherPassword(this.credenciaisExt.passwords.password_invalido)
        Login.clicarEmLogin()
        Login.verificarLoginFalha()
    })
    
})