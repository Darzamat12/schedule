import React from 'react';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import TestTable from './components/TestTable/TestTable';
import WrappedCalendar from './components/Calendar/Calendar';
import FilterTable from './components/FilterTable';
//import TestTable from './components/TestTable/TestTable';
import DropDownListRow from './components/DropDownListRow';
import WrappedDemoComponent from './components/TaskPage/TaskPage';
import ListView from './components/List/List';

import HideColumnsDropdown from './components/HideColumnsDropdown/HideColumnsDropdown';
import UserSettings from './components/UserSettings/UserSettings';

function App(props: any) {
  return (
    <div className="App">
      <Header />
      <div style={{ margin: 10 }}>
        <DropDownListRow />
        {props.isMobile === 1 && <ListView />}
        {props.scheduleMode === 0 && <FilterTable />}
        {props.scheduleMode === 2 && <WrappedCalendar />}
        {props.scheduleMode === 1 && <ListView />}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    scheduleMode: state.scheduleModeData.scheduleMode,
    isMobile: state.scheduleModeData.isMobile,
  };
};

export default connect(mapStateToProps, null)(App);
