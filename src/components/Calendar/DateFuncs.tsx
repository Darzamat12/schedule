import moment from 'moment';

export function formatDateToString(date) {
  return moment(date).format('MM-YYYY');
}

export function filterByDate(props, value) {
  const result = props.filter((el) => new Date(el.date).toLocaleDateString() === new Date(value).toLocaleDateString());

  return result;
}

export function getMonthValue(props, value) {
  const result = props.filter((el) => formatDateToString(new Date(el.date)) === formatDateToString(new Date(value)));

  return result.length;
}
