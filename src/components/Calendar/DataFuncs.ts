import { filterByDate } from './DateFuncs';

export function getListData(value: any, props: any) {
  const listData: { type: string; content: any; key: any }[] = [];
  filterByDate(props, value).forEach((el: { name: any; id: any; tag: string }) => {
    const color = chooseDot(el.tag);
    listData.push({ color, content: el.name, key: el.id });
  });

  return listData || [];
}

function chooseDot(dot: string) {
  switch (dot) {
    case 'self education':
      return 'rgba(13, 207, 255, 1)';
    case 'js task':
      return 'rgba(255, 39, 20, 0.7)';
    case 'codewars':
      return 'rgba(240, 75, 75, 0.61)';
    case 'html task':
      return 'rgba(229, 245, 55, 0.58)';

    case 'meetup':
      return 'rgba(48, 83, 206, 0.3)';

    case 'deadline':
      return 'rgba(55, 245, 71, 0.58)';
    case 'test':
      return 'rgba(71, 55, 245, 0.58)';

    case 'cross-check':
      return 'rgba(245, 55, 229, 0.38)';
    default:
      return 'dark';
  }
}
