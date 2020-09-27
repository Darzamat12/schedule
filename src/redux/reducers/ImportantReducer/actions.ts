import { ADD_IMPORTANT, REMOVE_IMPORTANT } from './actionTypes';

export const addImportant = (id) => ({
  type: ADD_IMPORTANT,
  payload: id,
});

export const removeImportant = (id) => ({
  type: REMOVE_IMPORTANT,
  payload: id,
});
