import MapComponent from './Map';
import { GoogleApiWrapper } from 'google-maps-react';
import { Spin } from 'antd';
import React from 'react';

const Loading = () => <Spin />;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyjNJJI9xzHvd7Ud79BYZhF86KMt3BvE8',
  LoadingContainer: Loading,
})(MapComponent);
