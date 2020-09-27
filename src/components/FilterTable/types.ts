export interface Event {
  id: number;
  name: string;
  author: string;
  tag: Array<string>;
  date: string;
  deadline: string;
  duration: number;
  description: string;
  result: string;
  remark: string;
  links: Array<string>;
  photo: null;
  video: string;
  map: IMap;
  rating: number;
  feedback: Array<string>;
  allowFeedback: boolean;
}

export interface IMap {
  lng: number;
  lat: number;
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
