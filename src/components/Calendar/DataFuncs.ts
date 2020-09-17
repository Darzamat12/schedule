import { filterByDate } from './DateFuncs';

export function getListData(value, props) {
  const listData: { type: string; content: any; key: any; }[] = [];
  filterByDate(props, value).forEach((el: { name: any; id: any; }) => {
    listData.push({ type: 'success', content: el.name, key: el.id });
  });

  return listData || [];
}

export function isEmpty(obj: {}) {
  return Object.keys(obj).length === 0;
}
