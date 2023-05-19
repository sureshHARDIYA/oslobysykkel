import { ReactElement, useMemo } from 'react';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const DataGrid = ({
  children,
}: {
  children: ReactElement;
}) => {
  const containerStyle = useMemo(
    () => ({ width: '100%', height: '620px' }),
    [],
  );
  const gridStyle = useMemo(
    () => ({ height: '100%', width: '100%' }),
    [],
  );

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        {children}
      </div>
    </div>
  );
};

export default DataGrid;
