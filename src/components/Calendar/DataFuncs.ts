import { filterByDate } from './DateFuncs';
import { tagsMap } from '../../utils/settingsData';
export function getListData(value: any, data: any, tagColors: any): any {
  const listData: { type: string; content: any; key: any }[] = [];
  filterByDate(data, value).forEach((el: { name: any; id: any }) => {
    const color:  any = tagColors[tagsMap.get(el.tag)];

    listData.push({ color, content: el.name, key: el.id });
  });

  return listData || [];
}

