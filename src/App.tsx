import React from 'react';
import TestTable from './components/TestTable/TestTable';
import WrappedCalendar from './components/Calendar/Calendar';

//import { connect } from 'react-redux';
//import {fetchScheduleData} from './redux/actions';

function App() {
  return (
    <div className="App">
      <WrappedCalendar />
    </div>
  );
}

export default App;
