import React from 'react';
import { connect } from 'react-redux';
import { changeIsALert } from './action';
import { Demo } from './alert';
import { bindActionCreators } from 'redux';

function TaskPage({ changeIsAlert, isAlert }) {
  const something = 'something';
  return (
    <div>
      <button onClick={() => changeIsAlert(isAlert, something)}>Task Page</button>
      {isAlert && <Demo />}
    </div>
  );
}
const putStateToPtops = (state) => {
  return {
    isAlert: state.taskPageReducer1.alert,
  };
};

const putActionsToPtops = (dispatch) => {
  return {
    changeIsAlert: bindActionCreators(changeIsALert, dispatch),
  };
};
const WrappedDemoComponent = connect(putStateToPtops, putActionsToPtops)(TaskPage);
export default WrappedDemoComponent;
