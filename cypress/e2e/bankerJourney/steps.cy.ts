import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../../page_objects/homePage"
import bankManagerPage from "../../page_objects/bankManagerPage"
import addCustomerPage from "../../page_objects/addCustomerPage"
import customerTablePage from "../../page_objects/customerTablePage"

const home = new homePage()
const addCustomer = new addCustomerPage()
const bankManager = new bankManagerPage()
const customerTable = new customerTablePage()

Given(/^the user is on the XYZ bank application$/, () => {
    cy.visit('/')
})

Given(/^the Bank Manager login button is clicked$/, () => {
    home.clickBankManagerBtn()
})

When(/^the heading has text (.+) and the home button has text (.+)$/, (header: string, btnHome: string) => {
    home.verifyHomeHeader(header)
    home.verifyHomeBtn(btnHome)
})

When(/^the manager button has text (.+)$/, (btnManager: string) => {
    home.verifyBankManagerBtn(btnManager)
})

When(/^the user clicks the Bank Manager login button$/, () => {
    home.clickBankManagerBtn()
})

Then(/^the manager page will contain buttons with text (.*), (.*), and (.*)$/, (addCustomer: string, openAccount: string, customers: string) => {
	bankManager.verifyAddCustomerTab(addCustomer)
    bankManager.verifyOpenAccountTab(openAccount)
    bankManager.verifyCustomersTab(customers)
})

When(/^the user chooses the option to Add Customer$/, () => {
	bankManager.clickAddCustomerBtn()
})

When(/^the user types in (.*), (.*), and (.+)$/, (firstName: string, lastName: string, postalCode: string) => {
    addCustomer.enterFirstName(firstName)
    addCustomer.enterLastName(lastName)
    addCustomer.enterPostalCode(postalCode)
})

When(/^the user clicks on the Add Customer button$/, () => {
	addCustomer.clickAddCustomerBtn()
})

When(/^the customers tab is clicked$/, () => {
    bankManager.clickCustomersBtn()
})

Then(/^the customer table should have first name (.+)$/, (firstName: string) => {
	cy.on('window:alert', function(alertText) {
        expect(alertText).eq('Customer added successfully with customer id :6')
    })  
    bankManager.clickCustomersBtn()
    customerTable.verifyfirstName(firstName)
})

Then(/^the customer table should have last name (.+)$/, (lastName: string) => {
    customerTable.verifyLastName(lastName)
})

Then(/^the customer table should have zip code (.+)$/, (postalCode: string) => {
    customerTable.verifyZipCode(postalCode)
})

Then(/^the delete button is clicked for the newly added row$/, () => {
    customerTable.clickDeleteBtn()
});

Then(/^the customers table should have (.+) rows$/, (rowNum: number) => {
	customerTable.firstRowLength(rowNum)
});
