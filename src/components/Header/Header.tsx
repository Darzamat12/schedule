import React from 'react';
import './Header.less'
import Icon from '@ant-design/icons';


import {Layout, Button, Avatar} from 'antd';
import {LeftOutlined,  SettingFilled} from '@ant-design/icons'
import {LeftArrow, Setting} from '../Icons/Icons'

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img className="logo" src="https://app.rs.school/static/images/logo-rsschool3.png"/>
      </a>
      <h1 className="title">Schedule</h1>
      <div className = "header__buttons">
          <Button className="header__setting" size="large">
            <LeftArrow />
            <Setting/>
          </Button>
        <Button size="large" type="dashed">
        <Avatar className="header__avatar" size="small"  src="https://app.rs.school/static/images/logo-rsschool3.png" />
          My profile
        </Button>
      </div>
    </header>
  );
}

export default Header; 