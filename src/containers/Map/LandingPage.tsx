import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
} from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

import { ROWDATA } from '../../types';

import 'leaflet/dist/leaflet.css';

const MapLandingPage = ({
  rowData,
}: {
  rowData: ROWDATA[] | undefined;
}) => {
  const FitBounds = () => {
    const map = useMap();

    useEffect(() => {
      // Fit the map to contain all markers when the component mounts
      if (rowData && rowData?.length > 0) {
        const data: any = rowData?.map((marker) => [
          marker.lat,
          marker.lon,
        ]);
        const bounds = L.latLngBounds(data);
        map.fitBounds(bounds);
      }
    }, [map]);

    return null;
  };

  return (
    <div>
      <MapContainer
        center={[59.91087115068967, 10.729828757277915]} // Center coordinates of the map
        zoom={16} // Initial zoom level of the map
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FitBounds />
        {rowData?.map((marker: any) => (
          <Marker
            key={marker.station_id}
            position={[marker.lat, marker.lon]}
          >
            <Popup>
              <div>
                <h2>{marker.name}</h2>
                <p>
                  <strong>Address: </strong>{' '}
                  {marker.address}
                </p>
                <p>
                  <strong>Capacity: </strong>
                  {marker.capacity}
                </p>
                <p>
                  <strong>Bikes Available: </strong>
                  {marker.num_bikes_available}
                </p>
                <p>
                  <strong>Docks Available: </strong>
                  {marker.num_docks_available}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapLandingPage;
