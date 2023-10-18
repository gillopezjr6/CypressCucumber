class customerTablePage
{
    firstNameCell = '//table/tbody/tr[6]/td[1]'
    lastNameCell = '//table/tbody/tr[6]/td[2]'
    zipCodeCell = '//table/tbody/tr[6]/td[3]'
    deleteCell = '//table/tbody/tr[6]/td[5]/button'
    rowData = '//table/tbody/tr'

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
        cy.xpath(this.rowData).should('have.length', rowNum)
    }
    returnTableData(firstName, lastName, postalCode) {
        cy.xpath(this.rowData)
        // Iterate over every row in the table 
        .each(function($row, index, $rows) {
            // Wrap function converts jquery elements to cypress elements
            // Within the first row
            cy.wrap($row).within(function() {
            // Get each cell and verify it does not contain the inserted/deleted values
                cy.get('td').should('not.have.text', firstName)
                cy.get('td').should('not.have.text', lastName)
                cy.get('td').should('not.have.text', postalCode)
            // Print each cell
                .each(function($cellData, index, $columns) {
                    cy.log($cellData.text())
                })
            })
        })
    }
    returnRowData(firstName, lastName, postalCode, acctNumber) {
        cy.xpath(this.rowData).first()
        .within(function() {
            cy.get('td').eq(0).should('have.text', firstName)
            cy.get('td').eq(1).should('have.text', lastName)
            cy.get('td').eq(2).should('have.text', postalCode)
            cy.get('td').eq(3).should('contain.text', acctNumber)
        })
    }
}

export default customerTablePage