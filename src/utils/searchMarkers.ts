import { ROWDATA } from '../types';

type SO = Omit<
  ROWDATA,
  'lat' | 'lon' | 'station_id' | 'is_renting'
>;

export const removeEmptyKeys = (obj: any): SO => {
  Object.keys(obj).forEach((key) => {
    if (
      obj[key] === null ||
      obj[key] === undefined ||
      obj[key] === '' ||
      obj[key] === 0
    ) {
      delete obj[key];
    }
  });

  return obj;
};

const searchMarkers = (
  markers: ROWDATA[],
  searchObject: SO,
): any => {
  const searchFor = removeEmptyKeys(searchObject);

  return markers.filter((marker) => {
    for (const key in searchFor) {
      if (
        key === 'num_docks_available' ||
        key === 'num_bikes_available' ||
        key === 'capacity'
      ) {
        if (marker[key] < searchObject[key]) {
          return false;
        }
      }

      if (key === 'name' || key === 'address') {
        const searchValue = searchFor[
          key as keyof SO
        ] as string;
        const markerValue = marker[key as keyof ROWDATA];

        if (
          !markerValue
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          return false;
        }
      }

      if (
        marker[key as keyof ROWDATA] !==
        searchObject[key as keyof SO]
      ) {
        return false;
      }
    }
    return true;
  });
};

export default searchMarkers;
