import { render, screen } from '@testing-library/react';

import ErrorBoundary from '../ErrorBoundry';

describe('ErrorBoundary', () => {
  it('renders "Something went wrong." when an error is thrown', () => {
    const spy = jest.spyOn(console, 'error');
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    spy.mockImplementation(() => {});

    const Throw = () => {
      throw new Error('bad');
    };

    render(
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Throw />
      </ErrorBoundary>,
    );

    expect(
      screen.getByText('Something went wrong'),
    ).toBeDefined();

    spy.mockRestore();
  });
});
