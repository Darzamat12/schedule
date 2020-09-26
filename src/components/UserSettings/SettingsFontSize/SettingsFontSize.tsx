import { Button } from 'antd';
import React from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const SettingsFontSize: React.FC = ({ changeUserReadableMode, userPreferences }: any) => {
  const changeReadableMode = () => {
    changeUserReadableMode(!userPreferences.readable);
  };

  return (
    <Button
      icon={
        userPreferences.readable ? (
          <EyeInvisibleOutlined style={{ fontSize: '20px' }} />
        ) : (
          <EyeOutlined style={{ fontSize: '20px' }} />
        )
      }
      type="default"
      onClick={changeReadableMode}
    >
      Readable Mode
    </Button>
  );
};

export default SettingsFontSize;
