import moment from 'moment';

export const choosingPage = (data) => {
  const currentDate = moment(Date.now()).format('YYYY-MM-DD');
  let currentIndex = -1;
  data.forEach((element, index) => {
    if (currentIndex === -1) if (moment(element.date).format('YYYY-MM-DD') === currentDate) currentIndex = index;
  });
  return Math.ceil(currentIndex / 10);
};
