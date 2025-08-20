const el = require('./elements').ELEMENTS
class Home {

    clicarEmLogoutSeLogado(){
        cy.get(el.logout).parent().then($el => {
            const text = $el.text()
            cy.log('Elemento de logout: ' + $el.text())
            if (text.includes('Logout')) {
                cy.wrap($el).click()
                cy.url().should('include', '/login')            
            } else {
                cy.log('Usuário não está logado')
            }
        })
    }

}
export default new Home()