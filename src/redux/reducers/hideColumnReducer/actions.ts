import { VISIBLE_COLUMNS, INITIAL_COLUMNS } from './actionTypes';

export const setVisibleColumns = (columnArray: any) => {
  return {
    type: VISIBLE_COLUMNS,
    payload: columnArray,
  };
};

export const setInitialColumns = (initialColumns: any) => {
  return {
    type: INITIAL_COLUMNS,
    payload: initialColumns,
  };
};
