/* global cy */
/// <reference types="cypress" />

describe('Should render the app with Logo', () => {
  beforeEach(() => {
    cy.visit('https://oslobysykkelskm.netlify.app/');
  });

  it('should be able to search anything in Table view', () => {
    cy.get('[data-cy="map-view"]').last().click();
    cy.get(
      'input[data-cy="search-in-table-view"].ant-input.ant-input-lg',
    ).should('exist');

    cy.get('[data-cy="search-in-table-view"]').type(
      'Storgata 53',
    );
    cy.get('.ant-input-group-addon').click();
    cy.get('.ag-row').should('have.length', 3);
    cy.get('.ag-root-wrapper .ag-row')
      .first()
      .find('.ag-cell[col-id="address"]')
      .should('contain', 'Storgata 53');
  });
});
