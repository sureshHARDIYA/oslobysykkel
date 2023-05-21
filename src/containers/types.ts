import { FormInstance } from 'antd';
import { ColDef } from '@ag-grid-community/core';
import { Dispatch, SetStateAction } from 'react';

import { ROWDATA } from '../types';
import { SO } from '../utils/searchMarkers';

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

export type FilterProps = {
  name: string;
  address: string;
  num_docks_available: number;
  num_bikes_available: number;
  capacity: number;
  is_renting: boolean;
};

export type BaseForms = {
  formValues: FilterProps;
  onFilterValueChange: (filterValues: any) => void;
  onSliderChange: (name: string, value: any) => void;
};

export interface FilterBoxProps extends BaseForms {
  setFormValues: Dispatch<SetStateAction<FilterProps>>;
  onFinish: () => void;
  filteredRows: ROWDATA[] | undefined;
  form: any;
}

export interface CurrentFilterProps {
  actFilered: SO;
  handleFilterClose: (filterName: string) => void;
  setFormValues: Dispatch<SetStateAction<FilterProps>>;
  initialValues: FilterProps;
  isShowClearAll: boolean;
  form: FormInstance;
}
