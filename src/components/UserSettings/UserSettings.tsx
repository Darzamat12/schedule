import React, { useState } from 'react';
import { Button, Drawer, Divider } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import SettingsTheme from './SettingsTheme';
import SettingsTagColor from './SettingsTagColor';
import SettingsFontSize from './SettingsFontSize';

const UserSettings: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button icon={<SettingOutlined />} title="User settings" size="large" type="primary" onClick={showDrawer} />

      <Drawer title="User Settings" placement="right" closable={false} onClose={onClose} visible={visible}>
        <SettingsTheme />
        <Divider />
        <SettingsFontSize />
        <Divider />
        <SettingsTagColor />
      </Drawer>
    </>
  );
};

export default UserSettings;
