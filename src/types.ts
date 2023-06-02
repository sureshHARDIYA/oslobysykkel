export interface Station {
  station_id: string;
  name: string;
  capacity: number;
  lat: number;
  lon: number;
  address: string;
}

export interface StationStatus {
  station_id: string;
  num_bikes_available: number;
  num_docks_available: number;
  is_renting: number;
}

export type ROWDATA = Station & StationStatus;

export interface MapViewProps {
  rowData: ROWDATA[] | undefined;
  isSuccess: boolean;
}
