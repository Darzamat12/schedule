import React, { useEffect } from 'react';
import './Calendar.less';
import { connect } from 'react-redux';
import AntDesignCalendar from './antDesign/antDesignCalendar';
import Loader from './antDesign/loader';
import MiniCalendar from './antDesign/antDesignMiniCalendar';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { fetchScheduleData } from '../../redux/actions'

function Calendar(props) {
  const { width } = useWindowDimensions();
  useEffect(() => {
    props.fetchScheduleData();
  }, []);
 

  if (!props.data) {
    return <Loader />;
  } else if (width > 750) {
    return <AntDesignCalendar props={props.data} />;
  } else {
    return <MiniCalendar props={props.data} />;
  }
}

const mapStateToProps = (state: { scheduleData: { data: any } }) => {
  return {
    data: state.scheduleData.data,
  };
};

const mapDispatchToProps = {
  fetchScheduleData
};
const WrappedCalendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);
export default WrappedCalendar;
