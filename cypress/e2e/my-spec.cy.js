describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html')
  })

  // Test 1
  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1)
  })


  // Test 2
  it('Should display the contact form', () => {
    // Assert that the contact form is visible
    cy.get('.form-control').should('be.visible');
  });


  // Test 3
  it('Should add a new contact', () => {
    // Fill in the form fields
    cy.get('input[placeholder="Name"]').type('Tanush Verma');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('tanush@gmail.com');

    // Click the Add button
    cy.get('button[name="add"]').click();
  });


  // Test 4
  it('Assert that the new contact is added', () => {
    // Fill in the form fields
    cy.get('input[placeholder="Name"]').type('Tanush Verma');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('tanush@gmail.com');

    // Click the Add button
    cy.get('button[name="add"]').click();

    // Assert that the new contact is added
    cy.get('td').contains('Tanush Verma').should('be.visible');
    cy.get('td').contains('1234567890').should('be.visible');
    cy.get('td').contains('tanush@gmail.com').should('be.visible');
  });


  // Test 5
  it('Should delete a contact', () => {
    // Add a new contact
    cy.get('input[placeholder="Name"]').type('Tanush Verma');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('tanush@gmail.com');
    cy.get('button[name="add"]').click();

    // Click the delete button
    cy.get('button[name="delete"]').click();
  });


  // Test 6
  it('Assert that the contact row is removed afer delete', () => {
    // Add a new contact
    cy.get('input[placeholder="Name"]').type('Tanush Verma');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('tanush@gmail.com');
    cy.get('button[name="add"]').click();

    // Click the delete button
    cy.get('button[name="delete"]').click();

    //Assert that the contact row is removed
    cy.contains('tr').should('not.exist');
  });


  // Test 7
  it('Should edit a contact', () => {
    // Add a new contact
    cy.get('input[placeholder="Name"]').type('Tanush Verma');
    cy.get('input[placeholder="Phone"]').type('1234567890');
    cy.get('input[placeholder="Email"]').type('tanush@gmail.com');
    cy.get('button[name="add"]').click();

    // Click the edit button
    cy.get('button[name="edit"]').click();

    // Edit the contact details
    cy.get('input[type="text"]').eq(0).clear().type('Tunush Berma');
    cy.get('input[type="text"]').eq(1).clear().type('9876543210');
    cy.get('input[type="text"]').eq(2).clear().type('tunush@gmail.com');

    // Click the update button
    cy.get('button[name="update"]').click();
  });


  // Test 8
  it('Assert for empty form addition', () => {
    // Add the form without filling any fields
    cy.get('button[name="add"]').click();
  
    // Assert that the new contact is added
    cy.get('td').should('have.text', '').should('be.visible');
    cy.get('td').should('have.text', '').should('be.visible');
    cy.get('td').should('have.text', '').should('be.visible');
  });


  // Test 9
  it('Should check the text values of table headers', () => {
    // Assert the text values of the table headers (th elements)
    cy.get('th').contains('Name').should('be.visible');
    cy.get('th').contains('Phone').should('be.visible');
    cy.get('th').contains('Email').should('be.visible');
    cy.get('th').contains('Actions').should('be.visible');
  });


  // Test 10
  it('Should check the values of placeholders', () => {
    // Assert the values of the placeholders
    cy.get('input[placeholder="Name"]').should('have.attr', 'placeholder', 'Name');
    cy.get('input[placeholder="Phone"]').should('have.attr', 'placeholder', 'Phone');
    cy.get('input[placeholder="Email"]').should('have.attr', 'placeholder', 'Email');
  });
   

});