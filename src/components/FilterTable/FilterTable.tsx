import React, { useState, useEffect, useMemo } from 'react';
import moment from 'moment';
import { Table, Tag, Space, Button, Spin, Alert } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { LinkOutlined } from '@ant-design/icons';
import ScheduleData from '../../data/scheduleData.json';
import { filters } from '../../utils/filters';
import { choosingPage } from './choosingPage';
import TaskPageDrawer from '../TaskPageDrawer';
import { fetchScheduleData } from '../../redux/actions';
import { connect } from 'react-redux';
import { setVisibleColumnTitles } from '../../redux/reducers/hideColumnReducer/actions';
import store from '../../redux/store';

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

let columns: ColumnsType<Event> = [
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
    render: (text, record) => {
      return (
        <>
          <Space size="middle">
            <Button onClick={(event) => event.stopPropagation()}>Edit</Button>
            <Button onClick={(event) => event.stopPropagation()}>Delete</Button>
          </Space>
        </>
      );
    },
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
localStorage.setItem('columns', JSON.stringify(columns));
const FilterTable = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<Event>({});
  const [page, setPage] = useState(1);
  let columnTitlesArray: any;
  const columnTitlesList = localStorage.getItem('currentColumns');
  setVisibleColumnTitles(columns);
  if (columnTitlesList !== null) columnTitlesArray = JSON.parse(columnTitlesList);
  useEffect(() => {
    props.fetchScheduleData(); //function to start fetch data
  }, []);

  const currentData = useMemo(() => {
    if (props.data !== null) {
      const pageIndex = choosingPage(props.data);
      setPage(pageIndex);
      return props.data.map((elem: Event) => {
        const date = new Date(elem.date);
        date.setHours(date.getHours() - (3 /*Moscow time offset*/ - props.timeZone));
        return { ...elem, date: date };
      });
    } else {
      return props.data;
    }
  }, [props.timeZone, props.data]);

  return (
    <>
      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error, try again</p>}
      {props.data !== null && (
        <Table<Event>
          pagination={{ defaultCurrent: page }}
          columns={props.adminMode ? columns : columns.filter((el, index) => index !== 6)}
          dataSource={currentData}
          onRow={(record, index) => {
            return {
              onClick: (event) => {
                setShowModal(true);
                setCurrentItem(record);
              },
            };
          }}
        />
      )}
      <TaskPageDrawer isShown={showModal} handleOnClose={() => setShowModal(false)} currentItem={currentItem} />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.scheduleData.loading,
    error: state.scheduleData.error,
    data: state.scheduleData.data,
    timeZone: state.timeZoneData.timeOffset,
    adminMode: state.userMode.isAdmin,
    columnTitles: state.hideColumnData.columnArray,
  };
};

const mapDispatchToProps = {
  fetchScheduleData,
  setVisibleColumnTitles,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTable);
