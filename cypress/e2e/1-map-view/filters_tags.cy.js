/* global cy */
/// <reference types="cypress" />

describe('Should render the app with Logo', () => {
  beforeEach(() => {
    cy.visit('https://oslobysykkelskm.netlify.app/');
  });

  it('it should clear all current filters when clicked on "Clear All"', () => {
    cy.get('#address').type('Dokkveien 1, 0250 Oslo');
    cy.get('.leaflet-marker-icon').should('have.length', 1);
    cy.get('[data-cy="map-view"]').should('exist');

    cy.get('[data-cy="clear-all"]')
      .children()
      .first()
      .click();

    cy.get('[data-cy="clear-all"]').should('not.exist');
  });

  it('should reset advanced filter value when tag filter is closed', () => {
    cy.get('[data-cy="slider_num_bikes_available"]')
      .clear()
      .type('27');
    cy.get('[data-cy="clear_num_bikes_available"]')
      .children()
      .last()
      .click();
    cy.get('[data-cy="slider_num_bikes_available"]').should(
      'contain.value',
      '0',
    );
  });
});
