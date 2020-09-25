import React, { CSSProperties } from 'react';
import { Col, Row, Image, Switch } from 'antd';
import ImageLight from '../../../icons/settings/lightscreen-icon.svg';
import ImageDark from '../../../icons/settings/darkscreen-icon.svg';
import { useThemeSwitcher } from 'react-css-theme-switcher';

const SettingsTheme: React.FC = ({ userPreferences, changeUserTheme }: any) => {
  const { switcher, themes } = useThemeSwitcher();
  const toggleTheme = () => {
    changeUserTheme(!userPreferences.darkTheme);
    switcher({ theme: userPreferences.darkTheme ? themes.light : themes.dark });
  };

  const styles = {
    switch: {
      width: '102px',
      height: '26px',
      backgroundColor: userPreferences.darkTheme ? '#ebe6ff' : '#fffbe6',
      border: userPreferences.darkTheme ? '1px solid #e661fa' : '1px solid #FAC961',
      outline: 'none',
      boxShadow: 'none',
    } as CSSProperties,
    light: { color: '#fa8c16', fontSize: 15 } as CSSProperties,
    dark: { color: '#8f16fa', fontSize: 15 } as CSSProperties,
  };

  return (
    <Switch
      style={styles.switch}
      onChange={toggleTheme}
      checkedChildren={
        <Row gutter={[0, 8]}>
          <Col flex="30px">
            <Image src={ImageLight} height={18} width={18} preview={false} />
          </Col>
          <Col flex="auto">
            <span style={styles.light}>Light</span>
          </Col>
        </Row>
      }
      unCheckedChildren={
        <Row gutter={[0, 8]}>
          <Col flex="30px">
            <span style={styles.dark}>Dark</span>
          </Col>
          <Col flex="auto">
            <Image src={ImageDark} height={18} width={18} preview={false} />
          </Col>
        </Row>
      }
      checked={!userPreferences.darkTheme}
    />
  );
};

export default SettingsTheme;
