import React from 'react';
import { connect } from 'react-redux';
import { changeTimeZone, changeUserMode } from '../../redux/actions';
import { Switch } from 'antd';
import { timeZoneList } from './DropDownsData';
import { SelectComponent, SaveScheduleDropDown } from './components';
import { DropDownListRowInterface } from './types';
import WeekSwitcher from './components/WeekSwitcher';
import ScheduleModeSwitcher from './components/ScheduleModeSwitcher'

const DropDownListRow: React.FC<DropDownListRowInterface> = (props) => {

  const handlerSwitchUserMode = (checked: boolean) => {
    props.changeUserMode(checked);
  };

  return (
    <>
      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', marginBottom: 10}}>
        <SelectComponent initialValue={3} optionData={timeZoneList} changeFunction={props.changeTimeZone} />
        <ScheduleModeSwitcher/>
        {props.scheduleMode !== 2 &&
          <WeekSwitcher/>
        }
        <SaveScheduleDropDown />
        <Switch
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
  };
};

const mapDispatchToProps = {
  changeTimeZone,
  changeUserMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownListRow);
