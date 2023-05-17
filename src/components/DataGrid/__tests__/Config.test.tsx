import { DefaultColumns, ColumnNames } from '../Config';

describe('Components: Config', () => {
  it('should match the snapshot for DefaultColumns', () => {
    expect(DefaultColumns).toMatchSnapshot();
  });

  it('should match the snapshot for ColumnNames', () => {
    expect(ColumnNames).toMatchSnapshot();
  });
});
