import { useRef } from 'react';
import { AgGridReact } from '@ag-grid-community/react';

import Header from '../components/Header';
import DataGrid from '../components/DataGrid/DataGrid';
import { usePrepareData } from '../hooks/usePrepareData';

const Home = () => {
  const {
    defaultColDef,
    columnDefs,
    rowData,
    isError,
    error,
  } = usePrepareData();

  const gridRef = useRef<AgGridReact>(null);

  return (
    <>
      {error && <p>{error}</p>}
      {!isError && (
        <DataGrid>
          <>
            <Header gridRef={gridRef} />
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              suppressRowTransform={true}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationAutoPageSize={true}
              cacheQuickFilter={true}
              ref={gridRef}
            ></AgGridReact>
          </>
        </DataGrid>
      )}
    </>
  );
};

export default Home;
