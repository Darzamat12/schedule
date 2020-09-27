import React from 'react';
import { Button, Avatar, Space } from 'antd';
import avatar from './avatar.png';
import UserSettings from '../UserSettings/UserSettings';

function Header() {
  return (
    <header className="header">
      <a href="https://app.rs.school/" className="logoRS"></a>
      <h1 className="title">Schedule</h1>
      <div className="header__buttons">
        <Space>
          <UserSettings />
          <Button href={'https://app.rs.school/profile'} size="large" type="dashed" className={'simulate_user_button'}>
            <Avatar src={avatar} />
            &nbsp; My profile
          </Button>
        </Space>
      </div>
    </header>
  );
}

export default Header;
