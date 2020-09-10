import React, { useEffect } from 'react';
import moment from 'moment';
import { Table, Tag, Space, Button } from 'antd';
import { ColumnsType } from "antd/es/table";
import { LinkOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import {fetchScheduleData, setVisibleColumnTitles} from '../../redux/actions';
import ScheduleData from '../../data/scheduleData.json';

interface Event {
    id: number,
    name: string,
    author: string,
    tag: string,
    date: string,
    deadline: string,
    duration: number,
    description: string,
    result: string,
    remark: string,
    links: Array<string>,
    photo: null,
    video: string,
    map: string,
    rating: number,
    feedback: string
}

const columns: ColumnsType<Event> = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: date => <p>{moment(date).format(('YYYY-MM-DD'))}</p>,
    },
    {
        title: 'Time',
        dataIndex: 'date',
        key: 'date',
        render: date => <p>{moment(date).format('HH:mm')}</p>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Link',
        dataIndex: 'links',
        key: 'links',
        render: links => (
            <>
                {links.map(link => {
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
        render: tag => {
                    let color;
                    if (tag === 'deadline') {
                        color = 'volcano';
                    } else if (tag === 'html/css task'
                        || tag === 'js task'
                        || tag === 'cv task')
                    {
                        color = 'green';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
               }
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

localStorage.setItem('columns', JSON.stringify(columns));

const columnsArray = columns.map((column, i) => {
    if(i>2) return column.title
});

const CurrentTestTable = (props: any) => {
    useEffect(() => {
        props.fetchScheduleData(); //function to start fetch data
    }, []);

    const data = ScheduleData;
    let columnTitlesArray: any;
    const columnTitlesList = localStorage.getItem('currentColumns');

    if(columnTitlesList !== null) columnTitlesArray = JSON.parse(columnTitlesList);

    return (
        <>
            <Table<Event> columns={columnTitlesArray} dataSource={data} />
        </>
    );
};


const mapStateToProps = (state: any) => {
    return {
        columnTitles: state.hideColumnData.columnArray,
        loading: state.scheduleData.loading,
        error: state.scheduleData.error,
        data: state.scheduleData.data,
    };
};

const mapDispatchToProps = {
    fetchScheduleData,
    setVisibleColumnTitles,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTestTable);
