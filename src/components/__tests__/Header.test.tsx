import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';

import Header from '../Header';

describe('Components: Header', () => {
  it('should call onFilterTextBoxChanged when input value changes', () => {
    // Mock gridRef
    const gridRef = {
      current: { api: { setQuickFilter: jest.fn() } },
    };

    // Render the Header component
    render(<Header gridRef={gridRef} />);

    // Get the filter input element
    const filterInput = screen.getByPlaceholderText(
      'Search Anything...',
    );

    // Simulate input value change
    fireEvent.input(filterInput, {
      target: { value: 'test' },
    });

    // Expect onFilterTextBoxChanged to be called with the correct value
    expect(
      gridRef.current.api.setQuickFilter,
    ).toHaveBeenCalledWith('test');
  });
});
