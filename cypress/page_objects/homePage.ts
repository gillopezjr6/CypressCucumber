class homePage
{
    homeHeading: string = '.mainHeading'
    buttonHome: string = 'button[ng-click="home()"]'
    managerButton: string = 'button[ng-click="manager()"]'
   
    verifyHomeHeader(header) {
        cy.get(this.homeHeading).should('have.text', header)
    }
    verifyHomeBtn(btnHome) {
        cy.get(this.buttonHome).should('be.visible').and('have.text', btnHome)
    }
    verifyBankManagerBtn(btnManager) {
        cy.get(this.managerButton).should('be.visible').and('have.text', btnManager )
    }
    clickBankManagerBtn() {
        cy.get(this.managerButton).click()
    }

}
export default homePage