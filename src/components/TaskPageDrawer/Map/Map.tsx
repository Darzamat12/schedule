import React from 'react';
import { Map, Marker } from 'google-maps-react';
import MapStyleLight from './mapStyleLight.json';
import MapStyleDark from './mapStyleDark.json';

const MapComponent: React.FC = ({ google, onMapClicked, activeMarker, darkTheme }: any) => {
  const customMapStyle = darkTheme ? MapStyleDark : MapStyleLight;

  return (
    <div className="map-container">
      <Map
        google={google}
        zoom={12}
        initialCenter={{ lat: 37.774929, lng: -122.419416 }}
        style={{ width: '100%', height: 300, position: 'absolute', top: 0, left: 0 }}
        styles={customMapStyle}
        onClick={onMapClicked}
      >
        <Marker title="RS School" position={activeMarker} />
      </Map>
    </div>
  );
};

export default MapComponent;
