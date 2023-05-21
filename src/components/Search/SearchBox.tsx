import { Col, Input } from 'antd';
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
          data-cy="search-in-table-view"
        />
      </Col>
    </StyledRow>
  );
};

export default SearchBox;
