class bankManagerPage
{
    addCustomer: string = 'button[ng-click="addCust()"]'
    openAccountBtn: string = 'button[ng-click="openAccount()"]'
    customersBtn: string = 'button[ng-click="showCust()"]'

    verifyAddCustomerTab(addCustomer) {
        cy.get(this.addCustomer).should('be.visible').and('contain.text', addCustomer)
    }
    verifyOpenAccountTab(openAccount) {
        cy.get(this.openAccountBtn).should('be.visible').and('contain.text', openAccount)
    }
    verifyCustomersTab(customers) {
        cy.get(this.customersBtn).should('be.visible').and('contain.text', customers)
    }
    clickAddCustomerBtn() {
        cy.get(this.addCustomer).click()
    }
    clickCustomersBtn() {
        cy.get(this.customersBtn).click()
    }
}

export default bankManagerPage