import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { changeTimeZone, changeScheduleMode, changeWeek, changeUserMode } from '../../redux/actions';
import { Switch, Space } from 'antd';
import { scheduleModeList, timeZoneList } from './DropDownsData';
import { SelectComponent, SaveScheduleDropDown } from './components';
import { DropDownListRowInterface } from './types';
import WeekSwitcher from './components/WeekSwitcher';

const DropDownListRow: React.FC<DropDownListRowInterface> = (props) => {

  const handlerSwitchUserMode = (checked: boolean) => {
    props.changeUserMode(checked);
  };

  return (
    <>
      <Space style={{marginBottom: 15, width: '100%', display: 'flex', flexWrap: 'wrap'}}>
        <SelectComponent initialValue={3} optionData={timeZoneList} changeFunction={props.changeTimeZone} />
        <SelectComponent
          initialValue={props.scheduleMode}
          optionData={scheduleModeList}
          changeFunction={props.changeScheduleMode}
        />
        {props.scheduleMode !== 2 &&
          <WeekSwitcher/>
        }
        <SaveScheduleDropDown />
        <Switch
          style={{ width: 70 }}
          checkedChildren="Admin"
          unCheckedChildren="User"
          onChange={handlerSwitchUserMode}
        />
      </Space>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    timeZone: state.timeZoneData.timeOffset,
    scheduleMode: state.scheduleModeData.scheduleMode,
    week: state.weekPickerData.week,
  };
};

const mapDispatchToProps = {
  changeTimeZone,
  changeScheduleMode,
  changeWeek,
  changeUserMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownListRow);
