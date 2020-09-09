import { SHOW_ALERT, HIDE_ALERT } from './types';

function showAlert(payload: any) {
  return {
    type: SHOW_ALERT,
    payload,
  };
}
function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

const changeIsALert = (isALert: boolean, something: any) => {
  if (isALert) return hideAlert();
  else return showAlert(something);
};

export { showAlert, hideAlert, changeIsALert };
