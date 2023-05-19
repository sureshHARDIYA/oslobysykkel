import {
  RollbackOutlined,
  AudioOutlined,
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Input, AutoComplete, Col, Button } from 'antd';

import { StyledRow } from '../../containers/Home';

import 'leaflet/dist/leaflet.css';

export const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const AutoCompleteBox = ({
  rowData,
  onSelect,
  handleReset,
  selectedAddress,
}: any) => {
  const [options, setOptions] = useState(
    rowData?.map((item: any) => ({
      label: item.address,
      value: item.address,
      key: `${item.address}_${item.station_id}`,
    })),
  );

  useEffect(() => {
    if (rowData?.length) {
      setOptions(
        rowData?.map((item: any) => ({
          label: item.address,
          value: item.address,
          key: `${item.address}_${item.station_id}`,
        })),
      );
    }
  }, [rowData]);

  return (
    <StyledRow>
      <Col flex="auto">
        <AutoComplete
          value={selectedAddress}
          options={options}
          onSelect={onSelect}
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
            suffix={suffix}
            enterButton
          />
        </AutoComplete>
      </Col>
      <Col flex="200px">
        <Button
          type="dashed"
          icon={<RollbackOutlined />}
          size="large"
          onClick={handleReset}
        >
          Reset
        </Button>
      </Col>
    </StyledRow>
  );
};

export default AutoCompleteBox;
