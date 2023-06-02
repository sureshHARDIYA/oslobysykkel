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
    cy.get('[data-cy="map-view"]').last().click();
    cy.get(
      'input[data-cy="search-in-table-view"].ant-input.ant-input-lg',
    ).should('exist');
    cy.get('[data-cy="map-view"]')
      .children()
      .first()
      .click();
    cy.contains(
      'label',
      'Number of available bikes +',
    ).should('exist');
  });

  it('should filter if Number of available bikes + field is changed', () => {
    cy.get('#address').type('Dokkveien 1, 0250 Oslo');
    cy.get('.leaflet-marker-icon').should('have.length', 1);
    cy.get('.leaflet-marker-icon').click();
    cy.contains(
      '.leaflet-popup-content',
      'Address: Dokkveien 1, 0250 Oslo',
    );
  });
});
