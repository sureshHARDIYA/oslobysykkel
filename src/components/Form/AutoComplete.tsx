import { AutoComplete, Form, Input } from 'antd';

import { FormAutoCompleteProps } from '../types';
import { FilterProps } from '../../containers/types';

const FormAutoComplete = ({
  formValues,
  onSliderChange,
  onFilterValueChange,
  label,
  name,
  placeholder,
  options,
}: FormAutoCompleteProps) => {
  return (
    <Form.Item label={label} labelAlign="left" name={name}>
      <AutoComplete
        allowClear
        value={formValues[name as keyof FilterProps] as any}
        options={options}
        onSelect={(value: string) => {
          onSliderChange(name, value);
          onFilterValueChange({
            ...formValues,
            [name]: value,
          });
        }}
        filterOption={(inputValue: string, option: any) =>
          (option?.value || '')
            .toString()
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
        style={{ width: '100%' }}
        data-cy={`auto_com_${name}`}
      >
        <Input.Search
          size="large"
          placeholder={placeholder}
        />
      </AutoComplete>
    </Form.Item>
  );
};

export default FormAutoComplete;
