import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
} from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

import 'leaflet/dist/leaflet.css';

const MapLandingPage = ({ rowData }: any) => {
  const FitBounds = () => {
    const map = useMap();

    useEffect(() => {
      // Fit the map to contain all markers when the component mounts
      if (rowData?.length > 0) {
        const data = rowData?.map((marker: any) => [
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
            // icon={markerIcon}
          >
            <Popup>
              <div>
                <h3>{marker.name}</h3>
                <p>Address: {marker.address}</p>
                <p>Capacity: {marker.capacity}</p>
                <p>
                  Bikes Available:{' '}
                  {marker.num_bikes_available}
                </p>
                <p>
                  Docks Available:{' '}
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
