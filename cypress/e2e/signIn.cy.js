/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('[placeholder=Email]')
      .type('testexampleemail@gmail.com');
    cy.get('[placeholder=Password]')
      .type('testpassword');

    cy.get('.btn').click();

    cy.get('a.nav-link')
      .should('contain.text', 'usertestacc');
  });
});
