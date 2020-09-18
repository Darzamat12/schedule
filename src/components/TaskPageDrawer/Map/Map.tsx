import React, { useState } from 'react';
import { Spin } from 'antd';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import { EnvironmentOutlined } from '@ant-design/icons';
import './Map.less';
import MapStyle from './mapStyle.json';

const MapComponent = (props) => {
  const customMapStyle = MapStyle;
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props: any, marker: any) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker({});
    }
  };

  return (
    <div className="map-container">
      <Map
        google={props.google}
        zoom={12}
        defaultCenter={{ lat: 25.791949, lng: -80.193596 }}
        style={{ width: '100%', height: 300, position: 'absolute', top: 0, left: 0 }}
        styles={customMapStyle}
        onClick={onMapClicked}
      >
        <Marker title="RS School" icon={<EnvironmentOutlined />} onClick={onMarkerClick} />
        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <div>
            <p>RS School</p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

const Loading = () => <Spin />;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyjNJJI9xzHvd7Ud79BYZhF86KMt3BvE8',
  LoadingContainer: Loading,
})(MapComponent);
