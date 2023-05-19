import { ROWDATA } from '../types';
import { ColDef } from '@ag-grid-community/core';

export enum VIEWS {
  MAP = 'MAP',
  TABLE = 'TABLE',
}

export type TabPosition = VIEWS.MAP | VIEWS.TABLE;

export type TableViewProps = {
  rowData: ROWDATA[] | undefined;
  columnDefs: ColDef[];
  defaultColDef: ColDef;
};

export type FilterBoxProps = {
  setFormValues: any;
  onFilterValueChange: any;
  onFinish: (values: any) => void;
  onSliderChange: (name: string, value: any) => void;
  formValues: {
    name: string;
    address: string;
    num_docks_available: number;
    num_bikes_available: number;
    capacity: number;
    is_renting: boolean;
  };
  filteredRows: any;
};
