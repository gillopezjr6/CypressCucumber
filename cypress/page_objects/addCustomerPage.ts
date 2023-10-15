class addCustomerPage
{
    firstNameTextbox: string = 'input[ng-model="fName"]'
    lastNameTextbox: string = 'input[ng-model="lName"]'
    postCode: string = 'input[ng-model="postCd"]'
    addCustomerBtn: string = 'button[type="submit"]'
    
    enterFirstName(firstName) {
        cy.get(this.firstNameTextbox).should('be.visible').type(firstName)
    }
    enterLastName(lastName) {
        cy.get(this.lastNameTextbox).should('be.visible').type(lastName)
    }
    enterPostalCode(postalCode) {
        cy.get(this.postCode).should('be.visible').type(postalCode)
    }
    clickAddCustomerBtn() {
        cy.get(this.addCustomerBtn).click()
    }

}

export default addCustomerPage