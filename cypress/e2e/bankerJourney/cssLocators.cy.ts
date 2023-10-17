describe('CssLocators', () => {
    
    it("css locators", () => {
        cy.visit("https://www.way2automation.com/angularjs-protractor/banking/#/login")
        // Click Bank Manager Login button
        cy.get('button[ng-click="manager()"]').click();
        // Click Customers button 
        cy.get('button[ng-class="btnClass3"]').click();
        // Search for "Harry"
        cy.get('[ng-model="searchCustomer"]').type("Harry");
        // Click the Delete button 
        cy.get('[ng-click="deleteCust(cust)"]').click();   
        // Verify element is not present 
        cy.get('[ng-click="deleteCust(cust)"]').should('not.exist');  
        
    })

})