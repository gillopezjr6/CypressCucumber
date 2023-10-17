class customerTablePage
{
    firstNameCell = '//table/tbody/tr[6]/td[1]'
    lastNameCell = '//table/tbody/tr[6]/td[2]'
    zipCodeCell = '//table/tbody/tr[6]/td[3]'
    deleteCell = '//table/tbody/tr[6]/td[5]/button'
    firstRow = '//table/tbody/tr'

    verifyfirstName(firstName) {
        cy.xpath(this.firstNameCell).should('be.visible').and('have.text', firstName)
    }
    verifyLastName(lastName) {
        cy.xpath(this.lastNameCell).should('be.visible').and('have.text', lastName)
    }
    verifyZipCode(postalCode) {
        cy.xpath(this.zipCodeCell).should('be.visible').and('have.text', postalCode)
    }
    clickDeleteBtn() {
        cy.xpath(this.deleteCell).click()
    }
    firstRowLength(rowNum) {
        cy.xpath(this.firstRow).should('have.length', rowNum)
    }
}

export default customerTablePage