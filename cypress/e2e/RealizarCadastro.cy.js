/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'

describe('Realizar Cadastro', function(){
    
    before(function(){
          cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
          })
    })

    beforeEach(function(){
          Login.acessarURL('/login')
          cy.url().should('include', 'automationexercise')
    })

    it.only("Realizar Cadastro com falha", function(){        
        Login.preencherNomeCadastro('Fulano de Tal')
        Login.preenherEmailCadastro(this.credenciaisExt.email.email_valido)
        Login.clicarEmSignup()
        Login.verificarCadastroFalha()
    })
})