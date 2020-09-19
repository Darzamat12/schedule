import { LOAD_DATA, PUT_DATA } from './types';

const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer,
  };
};

const loadData = () => {
  return {
    type: LOAD_DATA,
  };
};

export { loadData, putData };
