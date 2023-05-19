import { Col, Button, Input } from 'antd';
import { GrMapLocation } from 'react-icons/gr';
import { AudioOutlined } from '@ant-design/icons';

import { StyledRow } from '../../containers/Home';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const SearchBox = ({ onSearch }: any): JSX.Element => {
  return (
    <StyledRow gutter={[16, 48]}>
      <Col flex="auto">
        <Search
          placeholder="Search by address"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </Col>
      <Col flex="200px">
        <Button
          type="dashed"
          icon={<GrMapLocation />}
          size="large"
        >
          Use my location
        </Button>
      </Col>
    </StyledRow>
  );
};

export default SearchBox;
