import { Skeleton, Row, Col, Form } from 'antd';
import { useState, useEffect, useCallback } from 'react';

import searchMarkers, {
  removeEmptyKeys,
} from '../utils/searchMarkers';
import { FilterProps } from './types';
import { MapViewProps } from '../types';
import FilterBox from './Map/FilterBox';
import MapLandingPage from './Map/LandingPage';
import { initialValues } from './Map/constants';
import useIsMounted from '../hooks/useIsMounted';
import CurrentFilter from './Map/CurrentFilters';

import 'leaflet/dist/leaflet.css';

const MapView = ({ rowData, isSuccess }: MapViewProps) => {
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
    if (rowData) {
      const filterDed = searchMarkers(rowData, formValues);

      setFilteredRows(filterDed);
    }
  }, [rowData, formValues]);

  const onFilterValueChange = (
    filterValues: FilterProps,
  ) => {
    setFormValues({ ...filterValues });
    setShowClearAll(true);
  };

  /**
   * We want to render progress div (Skeleton) when
   * API call is in progress, to make sure user knows
   * something is happening. Show map, when data is available.
   */
  useEffect(() => {
    if (isSuccess && isMounted()) {
      setFilteredRows(rowData);
    }
  }, [isSuccess, isMounted, rowData]);

  /**
   * Interact with the form filters, this form would have been much better with
   * react-hook-form, but is okay for proof-of-concept.
   */
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
  const [form] = Form.useForm();

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
            filteredRows={rowData}
            onFinish={onFinish}
            setFormValues={setFormValues}
            onSliderChange={onSliderChange}
            formValues={formValues}
            onFilterValueChange={onFilterValueChange}
            form={form}
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
              form={form}
            />
          )}
          <MapLandingPage rowData={filteredRows} />
        </Col>
      </Row>
    </div>
  );
};

export default MapView;
