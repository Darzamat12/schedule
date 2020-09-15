import React, { useState } from 'react';
import moment from 'moment';
import { Table, Tag, Space, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { LinkOutlined } from '@ant-design/icons';
import ScheduleData from '../../data/scheduleData.json';
import { filters } from '../../utils/filters';
import { choosingPage } from './choosingPage';
import TaskPageDrawer from '../TaskPageDrawer';

interface Event {
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

const columns: ColumnsType<Event> = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => (a.date === b.date ? 0 : a.date < b.date ? -1 : 1),
    sortDirections: ['descend', 'ascend'],
    render: (date) => <p>{moment(date).format('YYYY-MM-DD')}</p>,
  },
  {
    title: 'Time',
    dataIndex: 'date',
    key: 'date',
    render: (date) => <p>{moment(date).format('HH:mm')}</p>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1),
    sortDirections: ['descend', 'ascend'],
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Link',
    dataIndex: 'links',
    key: 'links',
    render: (links) => (
      <>
        {links.map((link) => {
          return (
            <a key={link} href={link} onClick={(event) => event.stopPropagation()}>
              <LinkOutlined />
            </a>
          );
        })}
      </>
    ),
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    sorter: (a, b) => a.duration - b.duration,
  },
  {
    title: 'Type',
    key: 'tag',
    dataIndex: 'tag',
    filters: filters.tag,
    onFilter: (value, record) => record.tag.indexOf(value) === 0,
    render: (tag) => {
      let color;
      if (tag === 'deadline') {
        color = 'volcano';
      } else if (tag === 'html/css task' || tag === 'js task' || tag === 'cv task') {
        color = 'green';
      }
      return (
        <Tag color={color} key={tag}>
          {tag}
        </Tag>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Space>
    ),
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    filters: filters.author,
    onFilter: (value, record) => record.author.indexOf(value) === 0,
    sorter: (a, b) => a.author.length - b.author.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data = ScheduleData;
const page = choosingPage(data);

const FilterTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  return (
    <>
      <Table<Event>
        pagination={{ defaultCurrent: page }}
        columns={columns}
        dataSource={data}
        onRow={(record, index) => {
          return {
            onClick: (event) => {
              setShowModal(true);
              setCurrentItem(record);
            },
          };
        }}
      />
      <TaskPageDrawer isShown={showModal} handleOnClose={() => setShowModal(false)} currentItem={currentItem} />
    </>
  );
};

export default FilterTable;
