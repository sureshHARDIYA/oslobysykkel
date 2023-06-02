import { AgGridReact } from '@ag-grid-community/react';
import { ReactElement, useRef, useCallback } from 'react';

import { TableViewProps } from './types';
import SearchBox from '../components/Search/SearchBox';
import DataGrid from '../components/DataGrid/DataGrid';

const TableView = ({
  rowData,
  columnDefs,
  defaultColDef,
}: TableViewProps): ReactElement => {
  const gridRef = useRef<AgGridReact>(null);

  const onFilterTextBoxChanged = useCallback(
    (value: string) => {
      const gridAPI = gridRef?.current?.api;
      if (gridAPI) {
        gridAPI.setQuickFilter(value);
      }
    },
    [gridRef],
  );

  return (
    <>
      <SearchBox onSearch={onFilterTextBoxChanged} />
      <DataGrid>
        <AgGridReact
          enableCellTextSelection
          rowData={rowData}
          columnDefs={columnDefs}
          suppressRowTransform={true}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationAutoPageSize={true}
          cacheQuickFilter={true}
          ref={gridRef}
        />
      </DataGrid>
    </>
  );
};

export default TableView;
