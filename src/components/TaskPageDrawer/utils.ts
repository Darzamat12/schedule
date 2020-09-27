export const tagColor = (tagName: string) => {
  if (tagName === 'js task' || tagName === 'html task' || tagName === 'codewars') {
    return 'green';
  }
  if (tagName === 'lecture' || tagName === 'meetup' || tagName === 'self education') {
    return 'blue';
  }
  if (tagName === 'test') {
    return 'orange';
  }
  if (tagName === 'cross-check') {
    return 'purple';
  }
  if (tagName === 'deadline') {
    return 'red';
  }
};
