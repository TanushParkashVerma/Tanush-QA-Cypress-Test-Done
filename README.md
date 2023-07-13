# Tanush-QA-Cypress-Test-Done 
 Tanush-QA-Cypress-Test-Done 
## Running the Tests

git clone <https://github.com/TanushParkashVerma/Tanush-QA-Cypress-Test-Done>

npm install

npx cypress run


Click on the cypress > e2e > `my-spec.cy.js` file in the Cypress Test Runner to run the tests.

## Test Cases Automated

1. **Test if the application loads correctly**: Checks if the application loads correctly, including the title and table structure.

2. **Should display the contact form**: Verifies that the contact form is visible.

3. **Should add a new contact**: Adds a new contact and verifies if it is successfully added.

4. **Assert that the new contact is added**: Adds a new contact and asserts that the contact details are visible in the table.

5. **Should delete a contact**: Adds a new contact and deletes it.

6. **Assert that the contact row is removed after delete**: Adds a new contact and asserts that the contact row is removed after deletion.

7. **Should edit a contact**: Adds a new contact, edits the contact details, and updates the contact.

8. **Assert for empty form addition**: Adds the form without filling any fields and verifies if the contact is added with empty values.

9. **Should check the text values of table headers**: Verifies the text values of the table headers (th elements).

10. **Should check the values of placeholders**: Verifies the values of the placeholders in the contact form.

