import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import AntDesignCalendar from './antDesign/antDesignCalendar';
import Loader from './antDesign/loader';
import MiniCalendar from './antDesign/antDesignMiniCalendar';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { fetchScheduleData } from '../../redux/actions';

const Calendar = (props: any) => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (props.data === null) {
      props.fetchScheduleData();
    }
  }, []);

  const currentData = useMemo(() => {
    if (props.data !== null) {
      return props.data.map((elem: any) => {
        const date = new Date(elem.date);
        date.setHours(date.getHours() - (3 /*Moscow time offset*/ - props.timeZone));
        return { ...elem, date: date };
      });
    } else {
      return props.data;
    }
  }, [props.data, props.timeZone]);
  if (props.data === null) {
    return <Loader />;
  } else if (width > 750) {
    return <AntDesignCalendar data={currentData} />;
  } else {
    return <MiniCalendar data={currentData} />;
  }
};

const mapStateToProps = (state: any) => {
  return {
    data: state.scheduleData.data,
    timeZone: state.timeZoneData.timeOffset,
    tagColors: state.userPreferences.tagColor,
  };
};

const mapDispatchToProps = () => {
  return {
    fetchScheduleData,
  };
};

const WrappedCalendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);
export default WrappedCalendar;
