import { useState } from 'react';
import styled from 'styled-components';
import type { RadioChangeEvent } from 'antd';
import { Breadcrumb, Layout, theme, Row } from 'antd';

import MapView from './MapView';
import TableView from './TableView';
import { TabPosition, VIEWS } from './types';
import { ToolBar } from '../components/ToolBar';
import { usePrepareData } from '../hooks/usePrepareData';

const { Header, Content, Footer } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [mode, setMode] = useState<TabPosition>(VIEWS.MAP);

  const {
    defaultColDef,
    columnDefs,
    rowData,
    isError,
    isSuccess,
    error,
  } = usePrepareData();

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Logo>Oslo Bysykkel</Logo>
      </Header>
      <ContentWrapper className="site-layout">
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[
            { key: 'home', title: 'Home' },
            { key: 'mode', title: mode },
          ]}
        />

        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          {error && <p>{error}</p>}
          {!isError && (
            <ToolBar
              handleModeChange={handleModeChange}
              mode={mode}
            />
          )}
          {!isError && mode === VIEWS.MAP && (
            <MapView
              rowData={rowData}
              isSuccess={isSuccess}
            />
          )}
          {!isError && mode === VIEWS.TABLE && (
            <TableView
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
            />
          )}
        </div>
      </ContentWrapper>
      <Footer style={{ textAlign: 'center' }}>
        Oslo Bysykkel ©2023 Created by sureshHARDIYA
      </Footer>
    </Layout>
  );
};

export default Home;

export const StyledRow = styled(Row)`
  margin-bottom: 1rem;
`;

const ContentWrapper = styled(Content)`
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Logo = styled.div`
  width: 220px;
  border-radius: 6px;
  padding: 5px;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    padding: 5px 0px 5px 0px;
  }
`;
