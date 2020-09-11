import React, { useEffect } from 'react';
import './Calendar.less';
import data from '../../data/scheduleData.json';
import { connect } from 'react-redux';
import { loadData } from './actions';
import { bindActionCreators } from 'redux';
import AntDesignCalendar from './antDesign/antDesignCalendar';
import Loader from './antDesign/loader';

function Calendar({ fetchedData, loadData }) {
  useEffect(() => {
    loadData();
  }, []);

  if (fetchedData.length === 0) {
    return <Loader />;
  }
  return <AntDesignCalendar props={fetchedData} />;
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
