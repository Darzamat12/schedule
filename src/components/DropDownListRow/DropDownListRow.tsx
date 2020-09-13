import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { changeTimeZone, changeScheduleMode, changeWeek, changeUserMode } from '../../redux/actions';
import { message, Button, Switch } from 'antd';
import { weekList, scheduleModeList, timeZoneList } from './DropDownsData';
import { SelectComponent, SaveScheduleDropDown } from './components';
import { DropDownListRowInterface } from './types';

const DropDownListRow: React.FC<DropDownListRowInterface> = (props) => {
  const handlerHideBtn = () => {
    message.info('hide rows/columns');
  };

  const handlerSwitchUserMode = (checked: boolean) => {
    props.changeUserMode(checked);
  };

  return (
    <>
      <div className={'ant-row ant-row-space-around center'} style={{ marginBottom: 16, alignItems: 'center' }}>
        <SelectComponent initialValue={3} optionData={timeZoneList} changeFunction={props.changeTimeZone} />
        <SelectComponent
          initialValue={props.scheduleMode}
          optionData={scheduleModeList}
          changeFunction={props.changeScheduleMode}
        />
        <SelectComponent initialValue={props.week} optionData={weekList} changeFunction={props.changeWeek} />
        <SaveScheduleDropDown />
        <Button onClick={handlerHideBtn}>Hide</Button>
        <Switch
          style={{ width: 70 }}
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
