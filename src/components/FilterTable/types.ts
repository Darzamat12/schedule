export interface Event {
  id: number;
  name: string;
  author: string;
  tag: string;
  date: string;
  deadline: string;
  duration: number;
  description: string;
  result: string;
  remark: string;
  links: Array<string>;
  photo: null;
  video: string;
  map: string;
  rating: number;
  feedback: string;
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Event;
  index: number;
  children: React.ReactNode;
}
