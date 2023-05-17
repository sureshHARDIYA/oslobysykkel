import { render, screen } from '@testing-library/react';

import DataGrid from '../DataGrid';

describe('Components: DataGrid', () => {
  it('renders children components', () => {
    const children = <div>Test Children</div>;

    render(<DataGrid>{children}</DataGrid>);

    const childElement = screen.getByText('Test Children');

    expect(childElement).toBeInTheDocument();
  });
});
