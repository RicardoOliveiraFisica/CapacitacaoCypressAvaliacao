/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import Signup from '../support/Pages/Signup'

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

    it.only("Realizar Cadastro com sucesso", function(){
        Login.preencherNomeCadastro('Fulano de Tal')
        Login.preenherEmailCadastro('teste@teste5')
        Login.clicarEmSignup()
        Signup.verificarAberturaCadastroSucesso()
        Signup.selecionarGenero('Mr')
        Signup.preencherPasswordCadastro('123456')
        Signup.preencherNomeCadastro('Fulano')
        Signup.preencherSobrenomeCadastro('de Tal')
        Signup.preencherEmpresaCadastro('Empresa Teste')
        Signup.preencherEnderecoCadastro('Rua Teste, 123')
        Signup.selecionarPaisCadastro('Canada')
        Signup.preencherEstadoCadastro('Ontario')
        Signup.preencherCidadeCadastro('Toronto')
        Signup.preencherCepCadastro('12345')
        Signup.preencherTelefoneCadastro('1234567890')
        Signup.selecionarDiaNascimentoCadastro('1')
        Signup.selecionarMesNascimentoCadastro('January')
        Signup.selecionarAnoNascimentoCadastro('1990')
       /*  Signup.clicarEmCreate()
        Signup.verificarCadastroSucesso()
        Signup.clicarEmContinue()
        Login.verificarLoginSucesso() */
    })

    it("Realizar Cadastro com falha", function(){        
        Login.preencherNomeCadastro('Fulano de Tal')
        Login.preenherEmailCadastro(this.credenciaisExt.email.email_valido)
        Login.clicarEmSignup()
        Login.verificarCadastroFalha()
    })
})