import { Skeleton, Row, Col } from 'antd';
import { useState, useEffect, useCallback } from 'react';

import searchMarkers, {
  removeEmptyKeys,
} from '../utils/searchMarkers';
import FilterBox from './Map/FilterBox';
import MapLandingPage from './Map/LandingPage';
import useIsMounted from '../hooks/useIsMounted';

import 'leaflet/dist/leaflet.css';
import CurrentFilter from './Map/CurrentFilters';

export const initialValues = {
  name: '',
  address: '',
  num_docks_available: 0,
  num_bikes_available: 0,
  capacity: 0,
  is_renting: true,
};

const MapView = ({ rowData, isSuccess }: any) => {
  const isMounted = useIsMounted();

  const [filteredRows, setFilteredRows] = useState(() =>
    isSuccess ? rowData : [],
  );

  const [isShowClearAll, setShowClearAll] =
    useState<boolean>(false);

  const [formValues, setFormValues] =
    useState(initialValues);

  const onSliderChange = (name: string, value: any) => {
    const newPayload = {
      ...formValues,
      [name]: value,
    };

    setFormValues(newPayload);
  };

  const onFinish = useCallback(() => {
    const filterDed = searchMarkers(rowData, formValues);

    setFilteredRows(filterDed);
  }, [rowData, formValues]);

  useEffect(() => {
    if (isSuccess && isMounted()) {
      setFilteredRows(rowData);
    }
  }, [isSuccess, isMounted, rowData]);

  const onFilterValueChange = (filterValues: any) => {
    setFormValues({ ...filterValues });
    setShowClearAll(true);
  };

  useEffect(() => {
    if (formValues === initialValues) {
      setShowClearAll(false);
    }
    if (formValues && isShowClearAll) {
      onFinish();
    }
  }, [formValues, isShowClearAll, onFinish]);

  const handleFilterClose = (filterName: string) => {
    const newValues = {
      ...formValues,
      [filterName]: '',
    };

    setFormValues(newValues);
  };

  const actFilered = removeEmptyKeys(formValues);

  return (
    <div>
      <Row style={{ marginTop: '40px' }}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={6}
          style={{ paddingRight: '50px' }}
        >
          <FilterBox
            filteredRows={filteredRows}
            onFinish={onFinish}
            setFormValues={setFormValues}
            onSliderChange={onSliderChange}
            formValues={formValues}
            onFilterValueChange={onFilterValueChange}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={18}>
          {!rowData && (
            <Skeleton.Input
              active
              block
              style={{
                height: '600px',
                width: '100%',
                fontSize: 40,
                color: '#bfbfbf',
                background: '#f5f5f500',
              }}
            />
          )}
          {actFilered && (
            <CurrentFilter
              actFilered={actFilered}
              handleFilterClose={handleFilterClose}
              setFormValues={setFormValues}
              initialValues={initialValues}
              isShowClearAll={isShowClearAll}
            />
          )}
          <MapLandingPage
            rowData={filteredRows}
            setFilteredRows={setFilteredRows}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MapView;
