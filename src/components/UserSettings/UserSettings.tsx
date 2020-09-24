import React from 'react';
import { Button, Popover, Switch, Dropdown, Menu } from 'antd';
import { SettingOutlined, CheckOutlined, CloseOutlined, FontSizeOutlined, BgColorsOutlined } from '@ant-design/icons';
import '../../App.less';

const onFontClick = ({ key }: any) => {
  console.log(`Click on item ${key}`);
};

const onColorClick = ({ key }: any) => {
  console.log(`Click on item %c ${key} `, `background:black; color:${key}`);
};

const menuColors = (
  <Menu onClick={onColorClick}>
    <Menu.Item key="red" style={{ color: 'red' }}>
      Red
    </Menu.Item>
    <Menu.Item key="green" style={{ color: 'green' }}>
      Green
    </Menu.Item>
    <Menu.Item key="blue" style={{ color: 'blue' }}>
      Blue
    </Menu.Item>
    <Menu.Item key="white">Reset Color</Menu.Item>
  </Menu>
);

const menuFonts = (
  <Menu onClick={onFontClick}>
    <Menu.Item key="12" style={{ fontSize: 12 }}>
      12
    </Menu.Item>
    <Menu.Item key="14" style={{ fontSize: 14 }}>
      14
    </Menu.Item>
    <Menu.Item key="16" style={{ fontSize: 16 }}>
      16
    </Menu.Item>
    <Menu.Item key="18" style={{ fontSize: 18 }}>
      18
    </Menu.Item>
  </Menu>
);

const SettingsButton = () => {
  return (
    <Popover placement="left" content={ContentSettings} trigger="click">
      <Button icon={<SettingOutlined />} style={{ marginTop: 10, marginLeft: '90%' }}>
        Settings
      </Button>
    </Popover>
  );
};

const ContentSettings = () => {
  function onChangeTheme(checked: boolean) {
    console.log(`switch theme to light: ${checked}`);
  }

  return (
    <>
      <Dropdown trigger={['click']} overlay={menuColors} placement="bottomCenter" arrow>
        <Button icon={<BgColorsOutlined />} type="default">
          Change Color
        </Button>
      </Dropdown>

      <Dropdown trigger={['click']} overlay={menuFonts} placement="bottomCenter" arrow>
        <Button icon={<FontSizeOutlined />} type="default">
          Change Font Size
        </Button>
      </Dropdown>

      <Switch
        onChange={onChangeTheme}
        checkedChildren={
          <>
            <span>light </span>
            <CheckOutlined />
          </>
        }
        unCheckedChildren={
          <>
            <span>dark </span>
            <CloseOutlined />
          </>
        }
        defaultChecked
      />
    </>
  );
};

const UserSettings: React.FC = ({ userPreferences, changeUserColor, changeUserFontSize, changeUserTheme }: any) => {
  return (
    <>
      <SettingsButton />
      <div>
        fontSize: {userPreferences.fontSize}; color: {userPreferences.color}; theme:{' '}
        {userPreferences.lightTheme ? 'light' : 'dark'};
      </div>
      <Button onClick={() => changeUserColor('red')} type="default">
        Change Color to Red
      </Button>
      <Button onClick={() => changeUserFontSize(18)} type="default">
        Change font size to 18
      </Button>
      <Button onClick={() => changeUserTheme(!userPreferences.lightTheme)} type="default">
        Change Theme
      </Button>
    </>
  );
};

export default UserSettings;
