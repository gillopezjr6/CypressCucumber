Feature: Banker Journey

    A banker should be able to create an account, be assigned an account number, and delete an account

    Scenario Outline: Verify XYZ Bank page elements
        Given the user is on the XYZ bank application
        And the heading has text <header> and the home button has text <btnHome>
        And the manager button has text <btnManager>
        When the user clicks the Bank Manager login button
        Then the manager page will contain buttons with text <addCustomer>, <openAccount>, and <customers>

        Examples:
            | header   | btnHome | btnManager         | addCustomer  | openAccount  | customers |
            | XYZ Bank | Home    | Bank Manager Login | Add Customer | Open Account | Customers |

    Scenario Outline: Add a customer then delete the customer
        Given the user is on the XYZ bank application
        And the Bank Manager login button is clicked
        And the user chooses the option to Add Customer
        When the user types in <firstName>, <lastName>, and <postalCode>
        And the user clicks on the Add Customer button
        Then the customer table should have first name <firstName>
        And the customer table should have last name <lastName>
        And the customer table should have zip code <postalCode>
        And the delete button is clicked for the newly added row
        And the customers table should have <rowNum> rows

        Examples:
            | firstName | lastName | postalCode | rowNum |
            | Gilbert   | Lopez    | 48732      | 5      |

    # Scenario: Assert table elements
    #     Given the user is on the XYZ bank application
    #     And the Bank Manager login button is clicked
    #     When the customers tab is clicked
    #     Then



