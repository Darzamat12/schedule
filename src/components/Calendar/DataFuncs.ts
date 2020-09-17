import { filterByDate } from './DateFuncs';

export function getListData(value, props) {
  let listData = [];
  filterByDate(props, value).forEach((el) => {
    listData.push({ type: 'success', content: el.name, key: el.id });
  });

  return listData || [];
}

export function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
