import { Form, Col, InputNumber, Row, Slider } from 'antd';

import { IntegerStepProps } from '../types';
import { FilterProps } from '../../containers/types';

const IntegerStep = ({
  minVal = 0,
  maxVal = 100,
  label,
  name,
  formValues,
  onFilterValueChange,
  onSliderChange,
}: IntegerStepProps) => {
  const computedValue = (
    typeof formValues[name as keyof FilterProps] ===
    'number'
      ? formValues[name as keyof FilterProps]
      : 0
  ) as number;

  const handleSliderChange = (
    changedSliderValue: number,
  ) => {
    onSliderChange(name, changedSliderValue);
    onFilterValueChange({
      ...formValues,
      [name]: changedSliderValue,
    });
  };
  return (
    <Form.Item label={label} name={name}>
      <Row>
        <Col span={16}>
          <Slider
            key={name}
            min={minVal}
            max={maxVal}
            onChange={(value) => handleSliderChange(value)}
            value={computedValue}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            key={`${name}_integernumber`}
            min={minVal}
            max={maxVal}
            prefix="+"
            style={{ margin: '0 16px' }}
            value={computedValue}
            onChange={(value) =>
              handleSliderChange(value || 0)
            }
          />
        </Col>
      </Row>
    </Form.Item>
  );
};

export default IntegerStep;
