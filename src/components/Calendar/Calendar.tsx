import React, { useEffect } from 'react';
import './Calendar.less';
import { connect } from 'react-redux';
import AntDesignCalendar from './antDesign/antDesignCalendar';
import Loader from './antDesign/loader';
import MiniCalendar from './antDesign/antDesignMiniCalendar';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { fetchScheduleData } from '../../redux/actions'

function Calendar(props: any) {
  const { width } = useWindowDimensions();
  useEffect(() => {
    props.fetchScheduleData();
  }, []);
 
  

  if (!props.data) {
    return <Loader />;
  } else if (width > 750) {
    return <AntDesignCalendar data={props.data} tagColors={props.tagColors} />;
  } else {
    return <MiniCalendar data={props.data} tagColors={props.tagColors} />;
  }
}

const mapStateToProps = (state: { scheduleData: { data: any }, userPreferences: { tagColor: any } }) => {
  return {
    data: state.scheduleData.data,
    tagColors: state.userPreferences.tagColor
  };
};

const mapDispatchToProps = {
  fetchScheduleData
};
const WrappedCalendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);
export default WrappedCalendar;
