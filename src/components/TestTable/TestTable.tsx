import React, { useEffect, useMemo } from 'react';
import moment from 'moment';
import { Table, Tag, Space, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { LinkOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { fetchScheduleData } from '../../redux/actions';

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
            <a key={link} href={link}>
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
  },
  {
    title: 'Type',
    key: 'tag',
    dataIndex: 'tag',
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
  },
];

const TestTable = (props: any /*plug*/) => {
  useEffect(() => {
    props.fetchScheduleData(); //function to start fetch data
  }, []);

const TestTable = (props: any/*plug*/) => {
    useEffect(() => {
      props.fetchScheduleData(); //function to start fetch data
    }, []);

    const currentData = useMemo(() => {
      if (props.data !== null) {
        return props.data.map((elem: Event) => {
          const date = new Date(elem.date);
          date.setHours(date.getHours() - (3/*Moscow time offset*/ - props.timeZone));
          return {...elem, date: date};
        });
      } else {
        return props.data;
      }
    }, [props.timeZone, props.data]);


    return (
        <>
            {props.loading && <p>Loading...</p> }
            {props.error && <p>Error, try again</p>}
            {props.data !== null && <Table<Event> columns={columns} dataSource={currentData} />}
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        loading: state.scheduleData.loading,
        error: state.scheduleData.error,
        data: state.scheduleData.data,
        timeZone: state.dropDownsData.timeZone,
    };
};

const mapDispatchToProps = {
  fetchScheduleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestTable);
