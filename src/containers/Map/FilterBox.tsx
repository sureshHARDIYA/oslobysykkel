import { ReactElement } from 'react';
import { Form, Input, Switch, AutoComplete } from 'antd';

import { FilterBoxProps } from '../types';
import { initialValues } from '../MapView';
import IntegerStep from '../../components/Form/IntegerStep';

const FilterBox = ({
  onSliderChange,
  formValues,
  onFilterValueChange,
  filteredRows,
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
    >
      <Form.Item
        label="Address"
        labelAlign="left"
        name="address"
      >
        <AutoComplete
          allowClear
          value={formValues.address}
          options={filteredRows?.map((item: any) => ({
            label: item.address,
            key: item.station_id,
            value: item.address,
          }))}
          onSelect={(value: string) => {
            onSliderChange('address', value);
            onFilterValueChange({
              ...formValues,
              address: value,
            });
          }}
          filterOption={(inputValue: any, option: any) =>
            (option?.value || '')
              .toString()
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
          style={{ width: '100%' }}
        >
          <Input.Search
            size="large"
            placeholder="Search by Address"
          />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        label="Station Name"
        labelAlign="left"
        name="name"
      >
        <AutoComplete
          allowClear
          value={formValues.name}
          options={filteredRows?.map((item: any) => ({
            label: item.name,
            key: item.station_id,
            value: item.name,
          }))}
          onSelect={(value: string) => {
            onSliderChange('name', value);
            onFilterValueChange({
              ...formValues,
              name: value,
            });
          }}
          filterOption={(inputValue: any, option: any) =>
            (option?.value || '')
              .toString()
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
          style={{ width: '100%' }}
        >
          <Input.Search
            size="large"
            placeholder="Search by Station"
            // enterButton
          />
        </AutoComplete>
      </Form.Item>
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
