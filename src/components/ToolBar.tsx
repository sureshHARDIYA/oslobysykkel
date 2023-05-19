import { Space, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { GrMapLocation } from 'react-icons/gr';
import { ReactElement, RefObject } from 'react';
import { TableOutlined } from '@ant-design/icons';
import { AgGridReact } from '@ag-grid-community/react';

import { StyledRow } from '../containers/Home';

type ToolBarProps = {
  handleModeChange: (e: RadioChangeEvent) => void;
  mode: string;
  gridRef?: RefObject<AgGridReact<any>>;
};

export const ToolBar = ({
  handleModeChange,
  mode,
}: ToolBarProps): ReactElement => {
  return (
    <>
      <StyledRow justify="end" gutter={[16, 48]}>
        <Space.Compact block>
          <Radio.Group
            onChange={handleModeChange}
            value={mode}
            style={{ marginBottom: 8 }}
            size="large"
          >
            <Radio.Button value="MAP" style={{ zIndex: 1 }}>
              Map <GrMapLocation />
            </Radio.Button>
            <Radio.Button value="TABLE">
              Table <TableOutlined />
            </Radio.Button>
          </Radio.Group>
        </Space.Compact>
      </StyledRow>
    </>
  );
};
