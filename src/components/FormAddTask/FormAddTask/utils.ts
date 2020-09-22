export const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

export const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
  links: 'Input link or delete this field.',
};

export const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const initialTags = ['self education', 'js task', 'html task', 'codewars', 'meetup', 'test', 'cross-check'];
