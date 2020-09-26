import moment from 'moment';
import { Event } from './types';

export const choosingPage = (data: Event[]) => {
  const currentDate = moment(Date.now()).format('YYYY-MM-DD');
  let currentIndex = -1;
  data.forEach((element, index) => {
    if (currentIndex === -1) if (moment(element.date).format('YYYY-MM-DD') === currentDate) currentIndex = index;
  });
  return Math.ceil(currentIndex / 10);
};

export const thisWeek = (data: Event[]) => {
  const weekDay = moment().day();
  const weekArray = new Array(7).fill(0).map((undef: number, index: number) => {
    return moment()
      .subtract(weekDay, 'd')
      .add(index + 1, 'd');
  });

  return data.filter((event: Event, index: number) => {
    return weekArray.some((eventData) => eventData === moment(event.date));
  });
};
