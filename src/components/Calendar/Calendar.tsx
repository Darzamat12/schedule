import React, { useEffect } from 'react';
import './Calendar.less';
import { connect } from 'react-redux';
import { loadData } from './actions';
import { bindActionCreators } from 'redux';
import AntDesignCalendar from './antDesign/antDesignCalendar';
import Loader from './antDesign/loader';
import MiniCalendar from './antDesign/antDesignMiniCalendar'
import useWindowDimensions from '../../utils/useWindowDimensions'

function Calendar({ fetchedData, loadData }) {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    loadData();
  }, []);

  if (fetchedData.length === 0) {
    return <Loader />;
  } else
    if (width > 750) {
      return <AntDesignCalendar props={fetchedData} />;
    } else {
      return <MiniCalendar props={fetchedData} />
  }
}

const putStateToPtops = (state) => {
  return {
    fetchedData: state.CalendarPageReducer.fetchedData,
    modalWindowData: state.CalendarPageReducer.modalWindowData,
  };
};

const putActionsToPtops = (dispatch) => {
  return {
    loadData: bindActionCreators(loadData, dispatch),
  };
};
const WrappedCalendar = connect(putStateToPtops, putActionsToPtops)(Calendar);
export default WrappedCalendar;
