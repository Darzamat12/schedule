export function formatDateToString(date) {
  var MM = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  return MM + '-' + yyyy;
}

export function filterByDate(props, value) {
  let result = props.filter((el) => new Date(el.date).toLocaleDateString() === new Date(value).toLocaleDateString());

  return result;
}

export function getMonthValue(props, value) {
  let result = props.filter((el) => formatDateToString(new Date(el.date)) === formatDateToString(new Date(value)));

  return result.length;
}
