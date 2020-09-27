import React, { useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;
import { changeScheduleMode } from '../../../../redux/actions';
import { connect } from 'react-redux';
import { scheduleModeList } from '../../DropDownsData';

const ScheduleModeSwitcher: React.FC = (props: any) => {
  function handleChange(optionIndex: number) {
    props.changeScheduleMode(scheduleModeList[optionIndex].value);
  }

  return (
    <>
      <Select
        className={props.userPreferences.readable ? 'readable-bold-2' : ''}
        defaultValue={props.scheduleMode}
        onChange={handleChange}
        style={{ width: 100, margin: '0 10px 10px 0' }}
      >
        {scheduleModeList.map((item, i) => {
          return (
            <Option className={props.userPreferences.readable ? 'readable-bold-2' : ''} key={item.name} value={i}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    scheduleMode: state.scheduleModeData.scheduleMode,
    userPreferences: state.userPreferences,
  };
};

const mapDispatchToProps = {
  changeScheduleMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleModeSwitcher);
