const el = require('./elements').ELEMENTS
class Login {

    acessarURL(){
        cy.visit(el.url)
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

    verificarLoginSucesso(email){
        cy.get(el.msgLoginSucesso)
        .parent('a')
        .should('contain', 'Logged in as')
    }

}
export default new Login()