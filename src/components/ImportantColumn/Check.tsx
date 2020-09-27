import React, { useState } from 'react';
import { addImportant, removeImportant } from '../../redux/reducers/ImportantReducer/actions';
import { connect, useSelector, useDispatch } from 'react-redux';

export const Check = ({ id }) => {
  const { importantCol } = useSelector((state) => state.importantColData);
  const dispatch = useDispatch();
  const index = importantCol.findIndex((el: any) => el == id);
  const [state, setState] = useState(() => {
    return {
      id,
      index,
      checked: index > -1,
      activeClass: index > -1 ? 'active' : '',
    };
  });
  if (id != state.id) {
    setState({
      id,
      index,
      checked: index > -1,
      activeClass: index > -1 ? 'active' : '',
    });
  }
  const onClick = () => {
    if (!state.checked) {
      dispatch(addImportant(state.id));
    } else {
      dispatch(removeImportant(state.id));
    }
    setState(({ checked }) => {
      return {
        ...state,
        checked: !checked,
        activeClass: !checked ? 'active' : '',
      };
    });
  };
  return (
    <div className={'importantWrapper'} onClick={() => onClick()}>
      <div className={`importantIco ${state.activeClass}`} />
    </div>
  );
};
