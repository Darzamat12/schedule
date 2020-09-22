import React from 'react';
import { Spin } from 'antd';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import './Map.less';
import MapStyle from './mapStyle.json';

const MapComponent: React.FC = ({ google, onMapClicked, activeMarker }: any) => {
  const customMapStyle = MapStyle;

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

const Loading = () => <Spin />;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyjNJJI9xzHvd7Ud79BYZhF86KMt3BvE8',
  LoadingContainer: Loading,
})(MapComponent);
