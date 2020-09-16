import React from 'react';
import {connect} from 'react-redux'
//import TestTable from './components/TestTable/TestTable';
import DropDownListRow from './components/DropDownListRow'
import WrappedDemoComponent from './components/TaskPage/TaskPage';
//import { connect } from 'react-redux';
//import {fetchScheduleData} from './redux/actions';
import FilterTable from './components/FilterTable/FilterTable'
import CurrentTestTable from './components/HideColumnsDropdown/CurrentTestTable'
import HideColumnsDropdown from './components/HideColumnsDropdown/HideColumnsDropdown';

function App(props) {
  return (
    <div className="App">
      <DropDownListRow/>
      <HideColumnsDropdown/>
      {props.scheduleMode===0 && <FilterTable/>}
    </div>
  );
}

const mapStateToProps = (state:any)=>{
  return{
    scheduleMode: state.scheduleModeData.scheduleMode
  }
}

export default connect(mapStateToProps,null)(App);
