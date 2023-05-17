import { useCallback } from 'react';

import '../App.css';

const Header = ({ gridRef }: { gridRef: any }) => {
  const onFilterTextBoxChanged = useCallback(() => {
    if (gridRef) {
      gridRef.current.api.setQuickFilter(
        (
          document.getElementById(
            'filter-text-box',
          ) as HTMLInputElement
        ).value,
      );
    }
  }, [gridRef]);

  return (
    <div className="App-header">
      <span>Oslo Bysykkel</span>
      <input
        type="text"
        id="filter-text-box"
        placeholder="Search Anything..."
        onInput={onFilterTextBoxChanged}
      />
    </div>
  );
};

export default Header;
