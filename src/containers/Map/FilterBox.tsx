import { Form, Switch } from 'antd';
import { ReactElement } from 'react';

import { ROWDATA } from '../../types';
import { FilterBoxProps } from '../types';
import { initialValues } from './constants';
import IntegerStep from '../../components/Form/IntegerStep';
import FormAutoComplete from '../../components/Form/AutoComplete';

const FilterBox = ({
  onSliderChange,
  formValues,
  onFilterValueChange,
  filteredRows,
  form,
}: FilterBoxProps): ReactElement => {
  return (
    <Form
      layout="vertical"
      initialValues={initialValues}
      onValuesChange={(changedValues, allValues) => {
        onFilterValueChange({
          ...formValues,
          ...changedValues,
        });
      }}
      form={form}
    >
      <FormAutoComplete
        formValues={formValues}
        onSliderChange={onSliderChange}
        onFilterValueChange={onFilterValueChange}
        label="Address"
        name="address"
        placeholder="Search by Address"
        options={filteredRows?.map((item: ROWDATA) => ({
          label: item.address,
          key: item.station_id,
          value: item.address,
        }))}
      />

      <FormAutoComplete
        formValues={formValues}
        onSliderChange={onSliderChange}
        onFilterValueChange={onFilterValueChange}
        label="Station Name"
        name="name"
        placeholder="Search by Station"
        options={filteredRows?.map((item: ROWDATA) => ({
          label: item.name,
          key: item.station_id,
          value: item.name,
        }))}
      />
      <IntegerStep
        label="Number of available bikes +"
        name="num_bikes_available"
        minVal={0}
        maxVal={100}
        formValues={formValues}
        onFilterValueChange={onFilterValueChange}
        onSliderChange={onSliderChange}
      />
      <IntegerStep
        label="Capacity +"
        name="capacity"
        minVal={0}
        maxVal={100}
        formValues={formValues}
        onFilterValueChange={onFilterValueChange}
        onSliderChange={onSliderChange}
      />
      <IntegerStep
        label="Number of available docks +"
        name="num_docks_available"
        minVal={0}
        maxVal={100}
        formValues={formValues}
        onFilterValueChange={onFilterValueChange}
        onSliderChange={onSliderChange}
      />
      <Form.Item
        label="Is renting?"
        labelAlign="left"
        name="is_renting"
        valuePropName="checked"
      >
        <Switch
          onChange={(value) => {
            onSliderChange('is_renting', value);
            onFilterValueChange({
              ...formValues,
              is_renting: value,
            });
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default FilterBox;
