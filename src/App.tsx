import React from 'react';
import TestTable from './components/TestTable/TestTable';
import WrappedCalendar from './components/Calendar/Calendar';
import FilterTable from "./components/FilterTable";
//import TestTable from './components/TestTable/TestTable';
//import DropDownListRow from './components/DropDownListRow'
import WrappedDemoComponent from './components/TaskPage/TaskPage';
import ListView from './components/List/List';
//import { connect } from 'react-redux';
//import {fetchScheduleData} from './redux/actions';

function App() {
  return (
    <div className="App">
      <FilterTable />
    </div>
  );
}

export default App;
