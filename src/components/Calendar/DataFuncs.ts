import { useSelector } from 'react-redux';
import { filterByDate } from './DateFuncs';
import { tagsMap } from '../../utils/settingsData';
export function getListData(value: any, props: any) {
  const listData: { type: string; content: any; key: any }[] = [];
  filterByDate(props, value).forEach((el: { name: any; id: any }) => {
    const color = chooseColor(el.tag);
    listData.push({ color, content: el.name, key: el.id });
  });

  return listData || [];
}

function chooseColor(tag) {
  const colors = useSelector((state) => state.userPreferences.tagColor);
  let tagColor = tagsMap.get(tag);
  return colors[tagColor];
}
