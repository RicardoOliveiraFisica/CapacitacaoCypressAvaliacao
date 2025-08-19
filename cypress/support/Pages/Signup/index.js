const el = require('./elements').ELEMENTS
class Signup {

    verificarAberturaCadastroSucesso(){
        cy.url().should('include', '/signup')
    }

    selecionarGenero(genero){
        if(genero === 'Mr'){
            cy.get(el.titleCadastroMr).check()
        } else if(genero === 'Mrs'){
            cy.get(el.titleCadastroMrs).check()
        }
    }

    selecionarDiaNascimentoCadastro(dia){
        cy.get(el.diaNascimentoCadastro).select(dia)
    }

    selecionarMesNascimentoCadastro(mes){
        cy.get(el.mesNascimentoCadastro).select(mes)
    }

    selecionarAnoNascimentoCadastro(ano){
        cy.get(el.anoNascimentoCadastro).select(ano)
    }

    preencherPasswordCadastro(password){
        cy.get(el.passwordCadastro).type(password)
    }

    preencherNomeCadastro(nome){
        cy.get(el.nomeCadastro).type(nome)
    }

    preencherSobrenomeCadastro(sobrenome){
        cy.get(el.sobrenomeCadastro).type(sobrenome)
    }

    preencherEmpresaCadastro(empresa){
        cy.get(el.empresaCadastro).type(empresa)
    }

    preencherEnderecoCadastro(endereco){
        cy.get(el.enderecoCadastro).type(endereco)
    }

    selecionarPaisCadastro(pais){
        cy.get(el.paisCadastro).select(pais)
    }

    preencherEstadoCadastro(estado){
        cy.get(el.estadoCadastro).type(estado)
    }

    preencherCidadeCadastro(cidade){
        cy.get(el.cidadeCadastro).type(cidade)
    }

    preencherCepCadastro(cep){
        cy.get(el.cepCadastro).type(cep)
    }

    preencherTelefoneCadastro(telefone){
        cy.get(el.telefoneCadastro).type(telefone)
    }

    clicarEmCreate(){
        cy.get(el.botaoCreateAccount).click()
    }

    verificarCadastroSucesso(){
        cy.url().should('include', '/account_created')
    }

    clicarEmContinue(){
        cy.get(el.botaoContinue).click()
    }

}
export default new Signup()