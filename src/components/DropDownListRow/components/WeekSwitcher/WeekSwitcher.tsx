import React, { useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;
import 'antd/dist/antd.css';
import { changeWeek, reqScheduleDataSuccess, fetchScheduleData, setViewData} from './../../../../redux/actions';
import { connect } from 'react-redux';
import { weekList } from '../../DropDownsData';
import moment from 'moment';

const WeekSwitcher: React.FC = (props: any) => {

  useEffect(() => {
    if (props.data !== null) {
      props.setViewData(thisWeek(props.week));
    }
  }, [props.data])

  const thisWeek = (weekSwitcherIndex: number) => {
    let weeksOffset = 0;
    switch (weekSwitcherIndex) {
      case 0:
        weeksOffset = -1;
        break;
      case 1:
        weeksOffset = 0;
        break;
      case 2:
        weeksOffset = 1;
        break;
      default:
        break;
    }
    if (weekSwitcherIndex !== 3) {
      const weekDay = moment().day() + (7 * -weeksOffset);
      const weekArray = new Array(7).fill(0).map((undef: number, index: number) => {
        return moment()
          .subtract(weekDay, 'd')
          .add(index + 1, 'd')
          .format('MM-DD-YYYY');
      });

      return props.data.filter((event: {date: string}) => {
        return weekArray.some((eventData) => eventData === moment(event.date).format('MM-DD-YYYY'));
      });
    } else {
      return props.data;
    }
  };


  function handleChange(optionIndex: number) {
    props.changeWeek(weekList[optionIndex].value);
    props.setViewData(thisWeek(optionIndex));
  }

  return (
    <>
      <Select defaultValue={props.week} onChange={handleChange} style={{width: 130}}>
        {weekList.map((item, i) => {
          return (
            <Option key={item.name} value={i}>
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
    data: state.scheduleData.data,
    week: state.weekPickerData.week,
  };
};

const mapDispatchToProps = {
  changeWeek,
  reqScheduleDataSuccess,
  fetchScheduleData,
  setViewData,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekSwitcher);
