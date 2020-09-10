import React from 'react';
import TestTable from './components/TestTable/TestTable';
import DropDownListRow from './components/DropDownListRow'
//import { connect } from 'react-redux';
//import {fetchScheduleData} from './redux/actions';

function App() {
  return (
    <div className="App">
      <DropDownListRow/>
      <TestTable/>
    </div>
  );
}


export default App;
