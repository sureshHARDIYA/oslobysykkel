import { render, screen } from '@testing-library/react';

import Home from '../Home';

jest.mock('../../hooks/usePrepareData', () => ({
  __esModule: true,
  usePrepareData: () => ({
    defaultColDef: {},
    columnDefs: [],
    rowData: [],
    isError: false,
    error: null,
  }),
}));

// Mock @ag-grid-community/react
jest.mock('@ag-grid-community/react', () => {
  /**
   * Move import inside the module so that ref is
   * recognized as jest.mock does not understand
   * out of scope variables
   */
  const React = require('react');
  return {
    AgGridReact: React.forwardRef(
      (
        { rowData, columnDefs }: any,
        ref: any,
      ): JSX.Element => (
        <div ref={ref}>Mocked AgGridReact component</div>
      ),
    ),
  };
});

describe('Home', () => {
  it('renders the data grid when data is available', () => {
    render(<Home />);

    // Assert that the grid cell is rendered
    const gridCell = screen.getByText('Oslo Bysykkel');
    expect(gridCell).toBeInTheDocument();

    // Assert that the error message is not rendered
    const errorMessage = screen.queryByText(/error/i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});
