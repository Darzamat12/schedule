import React from 'react';
import {Layout, Button, Avatar} from 'antd';
import {LeftOutlined,  SettingFilled} from '@ant-design/icons'

const {Header} = Layout;
import './Header.less'
function List() {
  return (
    <Header className="header">
      <a href="#">
        <img className="logo" src="https://app.rs.school/static/images/logo-rsschool3.png"/>
      </a>
      <h1 className="title">Schedule</h1>
      <div>
          <Button className="header__setting" size="large">
            <LeftOutlined />
            <SettingFilled/>
          </Button>
        <Button size="large" type="dashed">
        <Avatar className="header__avatar" size="small"  src="https://app.rs.school/static/images/logo-rsschool3.png" />
          My profile
        </Button>
      </div>
    </Header>
  );
}

export default List; 