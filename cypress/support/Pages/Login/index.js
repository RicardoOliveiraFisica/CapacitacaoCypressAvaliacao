const el = require('./elements').ELEMENTS
class Login {

    acessarURL(url){
        cy.visit(url)
      //  cy.get(el.botaoLogin).should('be.visible')
    }

    preenherEmail(email){
        cy.get(el.email).type(email)
    }

    preencherPassword(password){
        cy.get(el.password).type(password)
    }

    clicarEmLogin(){
        cy.get(el.botaoLogin).click()
    }

    verificarLoginSucesso(){
        cy.get(el.msgLoginSucesso)
        .parent('a')
        .should('contain', 'Logged in as')
    }

    verificarLoginFalha(){
        cy.get(el.botaoLogin)
        .parent('form')
        .find('p')
        .should('have.text', 'Your email or password is incorrect!')
    }

    preencherNomeCadastro(nome){
        cy.get(el.nomeCadastro).type(nome)
    }

    preenherEmailCadastro(email){
        cy.get(el.emailCadastro).type(email)
    }

    clicarEmSignup(){
        cy.get(el.botaoSignup).click()
    }

    verificarCadastroFalha(){
        cy.get(el.botaoSignup)
        .parent('form')
        .find('p')
        .should('have.text', 'Email Address already exist!')
    }

}
export default new Login()