import React from 'react';
import { Spin, Space } from 'antd';

const Loader: React.FC = () => (
  <Space size="middle" className="loader">
    <Spin size="large" />
  </Space>
);
export default Loader;
