import ky from 'ky';
import { ColDef } from '@ag-grid-community/core';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

import API from '../config/API';
import {
  ColumnNames,
  DefaultColumns,
} from '../components/DataGrid/Config';
import { ROWDATA, Station, StationStatus } from '../types';

export const usePrepareData = () => {
  const defaultColDef = useMemo<ColDef>(
    () => DefaultColumns,
    [],
  );
  const [isErrorFetching, setIsErrorFetching] =
    useState(false);

  const columnDefs = ColumnNames;

  const [rowData, setRowData] = useState<ROWDATA[]>();

  const stations = useQuery({
    queryKey: ['stations'],
    queryFn: async () => {
      try {
        const response: any = await ky
          .get(API.STATION_INFO)
          .json();
        return response.data.stations;
      } catch (error) {
        setIsErrorFetching(true);
        throw new Error('Failed to fetch station info');
      }
    },
  });

  const stationStatus = useQuery({
    queryKey: ['stationStatus'],
    queryFn: async () => {
      try {
        const response: any = await ky
          .get(API.STATION_STATUS)
          .json();
        return response.data.stations;
      } catch (error) {
        setIsErrorFetching(true);
        throw new Error('Failed to fetch station status');
      }
    },
  });

  useEffect(() => {
    if (stations.isSuccess && stationStatus.isSuccess) {
      const stationsData = stations.data as Station[];
      const stationStatusData =
        stationStatus.data as StationStatus[];
      if (Array.isArray(stationsData)) {
        const data = stationsData.map((station) => {
          const status = stationStatusData?.find(
            (s) => s.station_id === station.station_id,
          );
          return {
            station_id: station.station_id,
            name: station.name,
            capacity: station.capacity ?? 0,
            lat: station.lat ?? 0,
            lon: station.lon ?? 0,
            address: station.address,
            num_bikes_available:
              status?.num_bikes_available ?? 0,
            num_docks_available:
              status?.num_docks_available ?? 0,
            is_renting: status?.is_renting ?? 0,
          };
        });

        setRowData(data);
      }
    }
  }, [
    stations.isSuccess,
    stationStatus.isSuccess,
    stations.data,
    stationStatus.data,
  ]);

  // Handle errors
  const isError =
    stations.isError ||
    stationStatus.isError ||
    isErrorFetching;
  const error = isError ? 'API is down' : null;
  const isSuccess =
    stations.isSuccess && stationStatus.isSuccess;

  return {
    defaultColDef,
    columnDefs,
    rowData,
    isError,
    error,
    isSuccess,
  };
};
