import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
};

const UploadComponent = () => {
  return (
    <Upload {...props}>
      <Button className="upload-button" icon={<UploadOutlined />}>
        Upload files
      </Button>
    </Upload>
  );
};

export default UploadComponent;
