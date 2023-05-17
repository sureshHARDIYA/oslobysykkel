import {
  renderHook,
  waitFor,
} from '@testing-library/react';

import { usePrepareData } from '../usePrepareData';

const mockStationInfoResponse = {
  stations: [
    {
      station_id: '1',
      name: 'Station 1',
      capacity: 10,
      address: 'Address 1',
    },
    {
      station_id: '2',
      name: 'Station 2',
      capacity: 20,
      address: 'Address 2',
    },
  ],
};

const mockStationStatusResponse = {
  stations: [
    {
      station_id: '1',
      num_bikes_available: 5,
      num_docks_available: 5,
      is_renting: 1,
    },
    {
      station_id: '2',
      num_bikes_available: 10,
      num_docks_available: 10,
      is_renting: 0,
    },
  ],
};

jest.mock('@tanstack/react-query', () => ({
  useQuery: ({ queryKey, queryFn }: any) => {
    if (queryKey[0] === 'stations') {
      return {
        isError: false,
        data: mockStationInfoResponse.stations,
        isSuccess: true,
      };
    }

    if (queryKey[0] === 'stationStatus') {
      return {
        isError: false,
        data: mockStationStatusResponse.stations,
        isSuccess: true,
      };
    }

    return {
      isError: true,
      data: null,
      isSuccess: false,
    };
  },
}));

describe('usePrepareData', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset all mocks before each test
  });

  it('fetches and prepares data correctly', async () => {
    const { result } = renderHook(() => usePrepareData());

    expect(result.current.defaultColDef).toBeDefined();
    expect(result.current.columnDefs).toBeDefined();
    expect(result.current.isError).toBe(false);
    expect(result.current.error).toBeNull();

    await waitFor(() => result.current.rowData);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.rowData).toStrictEqual([
      {
        address: 'Address 1',
        capacity: 10,
        is_renting: 1,
        name: 'Station 1',
        num_bikes_available: 5,
        num_docks_available: 5,
        station_id: '1',
      },
      {
        address: 'Address 2',
        capacity: 20,
        is_renting: 0,
        name: 'Station 2',
        num_bikes_available: 10,
        num_docks_available: 10,
        station_id: '2',
      },
    ]);
    expect(result.current.error).toBeNull();
  });
});
