import { Form, Col, InputNumber, Row, Slider } from 'antd';

const IntegerStep = ({
  minVal = 0,
  maxVal = 100,
  label,
  name,
  formValues,
  onFilterValueChange,
  onSliderChange,
}: any) => {
  return (
    <Form.Item label={label} name={name}>
      <Row>
        <Col span={16}>
          <Slider
            min={minVal}
            max={maxVal}
            onChange={(value) => {
              onSliderChange(name, value);
              onFilterValueChange({
                ...formValues,
                num_bikes_available: value,
              });
            }}
            value={
              typeof formValues.num_bikes_available ===
              'number'
                ? formValues.num_bikes_available
                : 0
            }
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={minVal}
            max={maxVal}
            prefix="+"
            style={{ margin: '0 16px' }}
            value={
              typeof formValues.num_bikes_available ===
              'number'
                ? formValues.num_bikes_available
                : 0
            }
            onChange={(value) => {
              onSliderChange(name, value);
              onFilterValueChange({
                ...formValues,
                num_bikes_available: value,
              });
            }}
          />
        </Col>
      </Row>
    </Form.Item>
  );
};

export default IntegerStep;
