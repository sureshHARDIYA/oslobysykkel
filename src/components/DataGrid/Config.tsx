export const DefaultColumns = {
  width: 250,
  resizable: true,
  sortable: true,
  filter: "agTextColumnFilter",
  floatingFilter: true,
};

export const ColumnNames = [
  {
    field: "station_id",
    headerName: "Station ID",
    width: 200,
  },
  { field: "name", headerName: "Station Name", filter: "agSetColumnFilter" },
  {
    field: "address",
    headerName: "Address",
  },
  {
    field: "num_bikes_available",
    headerName: "Number of available bikes",
    filter: "agNumberColumnFilter",
  },
  {
    field: "num_docks_available",
    headerName: "Number of available docks",
    filter: "agNumberColumnFilter",
  },
  {
    field: "capacity",
    headerName: "Capacity",
    filter: "agNumberColumnFilter",
    width: 150,
  },
  {
    field: "is_renting",
    headerName: "Is renting?",
  },
];
