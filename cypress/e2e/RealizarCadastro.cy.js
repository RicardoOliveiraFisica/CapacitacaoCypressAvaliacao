/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import Signup from '../support/Pages/Signup'
import { criarRegistroUsuario } from '../support/Factories/newUser'

describe('Realizar Cadastro', function(){
    const registroFaker = criarRegistroUsuario()

    before(function(){
    })

    beforeEach(function(){
          cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
          })
          
          Login.acessarURL('/login')
          cy.url().should('include', 'automationexercise')
    })

    it("Realizar Cadastro com sucesso", function(){
        Login.preencherNomeCadastro(registroFaker.firstName + ' ' + registroFaker.lastName)
        Login.preenherEmailCadastro(registroFaker.firstName + registroFaker.lastName + '@cypress')
        Login.clicarEmSignup()
        Signup.verificarAberturaCadastroSucesso()
        Signup.selecionarGenero(registroFaker.gender)        
        Signup.selecionarDiaNascimentoCadastro(registroFaker.day)
        Signup.selecionarMesNascimentoCadastro(registroFaker.month)
        Signup.selecionarAnoNascimentoCadastro(registroFaker.year)
        Signup.preencherPasswordCadastro(registroFaker.password)
        Signup.preencherNomeCadastro(registroFaker.firstName)
        Signup.preencherSobrenomeCadastro(registroFaker.lastName)
        Signup.preencherEmpresaCadastro(registroFaker.company)
        Signup.preencherEnderecoCadastro(registroFaker.address)
        Signup.selecionarPaisCadastro(registroFaker.country)        
        Signup.preencherEstadoCadastro(registroFaker.state)
        Signup.preencherCidadeCadastro(registroFaker.city)
        Signup.preencherCepCadastro(registroFaker.zipCode)
        Signup.preencherTelefoneCadastro(registroFaker.phone)
        Signup.clicarEmCreate()
        Signup.verificarCadastroSucesso()
        Signup.clicarEmContinue()
        Login.verificarLoginSucesso()
    })

    it("Realizar Cadastro com falha", function(){        
        Login.preencherNomeCadastro('Fulano de Tal')
        Login.preenherEmailCadastro(this.credenciaisExt.email.email_valido)
        Login.clicarEmSignup()
        Login.verificarCadastroFalha()
    })
    
})