import React from 'react';
import TestTable from './components/TestTable/TestTable';
import WrappedDemoComponent from './components/TaskPage/TaskPage';
//import { connect } from 'react-redux';
//import {fetchScheduleData} from './redux/actions';

function App() {
  return (
    <div className="App">
      <WrappedDemoComponent />
    </div>
  );
}

export default App;
