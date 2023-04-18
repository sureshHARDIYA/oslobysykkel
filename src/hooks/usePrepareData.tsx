import ky from "ky";
import { useQueries } from "react-query";
import { ColDef } from "@ag-grid-community/core";
import { useEffect, useMemo, useState } from "react";

import API from "../config/API";
import { ColumnNames, DefaultColumns } from "../components/DataGrid/Config";

type Station = {
  station_id: string;
  name: string;
  capacity: number;
  address: string;
};

type StationStatus = {
  station_id: string;
  num_bikes_available: number;
  num_docks_available: number;
  is_renting: number;
};

type ROWDATA = Station & StationStatus;

export const usePrepareData = () => {
  const defaultColDef = useMemo<ColDef>(() => DefaultColumns, []);

  const columnDefs = ColumnNames;

  const [rowData, setRowData] = useState<ROWDATA[]>();

  const queryResults = useQueries([
    {
      queryKey: "stations",
      queryFn: async () => {
        const response = await ky
          .get(API.STATION_INFO)
          .json<{ data: { stations: Station[] } }>();
        return response.data.stations;
      },
    },
    {
      queryKey: "stationStatus",
      queryFn: async () => {
        const response = await ky
          .get(API.STATION_STATUS)
          .json<{ data: { stations: StationStatus[] } }>();
        return response.data.stations;
      },
    },
  ]);

  useEffect(() => {
    if (queryResults) {
      const stations = queryResults[0].data as Station[];
      const stationStatus = queryResults[1].data as StationStatus[];
      const data = stations?.map((station) => {
        const status = stationStatus?.find(
          (s) => s.station_id === station.station_id
        );
        return {
          station_id: station.station_id,
          name: station.name,
          num_bikes_available: status?.num_bikes_available ?? 0,
          num_docks_available: status?.num_docks_available ?? 0,
          is_renting: status?.is_renting ?? 0,
          capacity: station.capacity ?? 0,
          address: station.address,
        };
      });

      setRowData(data);
    }
  }, [queryResults]);

  // Handle errors
  const isError = queryResults.some((result) => result.isError);
  const error = isError ? "API is down" : null;

  return { defaultColDef, columnDefs, rowData, isError, error };
};
