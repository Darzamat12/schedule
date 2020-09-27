import moment from 'moment';

export function formatDateToString(date: any) {
  return moment(date).format('MM-YYYY');
}

export function filterByDate(data: any, value: any) {
  const result = data.filter(
    (el: any) => new Date(el.date).toLocaleDateString() === new Date(value).toLocaleDateString(),
  );
  return result;
}

export function getMonthValue(data: any, value: any) {
  const result = data.filter(
    (el: any) => formatDateToString(new Date(el.date)) === formatDateToString(new Date(value)),
  );

  return result.length;
}
