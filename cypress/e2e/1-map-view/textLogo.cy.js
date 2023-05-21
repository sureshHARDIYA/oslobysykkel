/* global cy */
/// <reference types="cypress" />

describe('Should render the app with Logo', () => {
  beforeEach(() => {
    cy.visit('https://oslobysykkelskm.netlify.app/');
  });

  it('Should render the logo', () => {
    cy.get('header')
      .first()
      .should('have.text', 'Oslo Bysykkel');
  });

  it('Should have breadcrumb with Home/Map order', () => {
    cy.get('.ant-breadcrumb-link')
      .last()
      .should('have.text', 'MAP');
  });

  it('should change views from map to table', () => {
    cy.get('[data-cy="table-view"]')
    .click();
  });
});
