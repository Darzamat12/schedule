import React from 'react';
import { connect } from 'react-redux';
import { changeTimeZone, changeUserMode } from '../../redux/actions';
import { Switch, Button } from 'antd';
import { timeZoneList } from './DropDownsData';
import { SelectComponent, SaveScheduleDropDown } from './components';
import { DropDownListRowInterface } from './types';
import WeekSwitcher from './components/WeekSwitcher';
import ScheduleModeSwitcher from './components/ScheduleModeSwitcher';
import ButtonAddTask from '../FormAddTask/ButtonAddTask';
import generatePDF from './generatePDF';
import { DownloadOutlined } from '@ant-design/icons';

const DropDownListRow: React.FC<DropDownListRowInterface> = (props) => {
  const handlerSwitchUserMode = (checked: boolean) => {
    props.changeUserMode(checked);
  };

  return (
    <>
      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', marginBottom: 10 }}>
        <SelectComponent
          initialValue={3}
          optionData={timeZoneList}
          changeFunction={props.changeTimeZone}
          userPreferences
        />
        <ScheduleModeSwitcher />
        {props.scheduleMode !== 2 && <WeekSwitcher />}
        {props.adminMode && <ButtonAddTask />}
        <Button
          onClick={() => {
            generatePDF(props.scheduleMode);
          }}
          className={props.userPreferences.readable ? 'readable-bold-2' : ''}
          style={{ margin: '0 0 10px auto' }}
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
        >
          Download
        </Button>
        <Switch
          className={props.userPreferences.readable ? 'readable-bold-2' : ''}
          style={{ width: 70, margin: '0 0 10px auto' }}
          checkedChildren="Admin"
          unCheckedChildren="User"
          onChange={handlerSwitchUserMode}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    timeZone: state.timeZoneData.timeOffset,
    scheduleMode: state.scheduleModeData.scheduleMode,
    userPreferences: state.userPreferences,
    adminMode: state.userMode.isAdmin,
  };
};

const mapDispatchToProps = {
  changeTimeZone,
  changeUserMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownListRow);
