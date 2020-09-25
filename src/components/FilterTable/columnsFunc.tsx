import React from 'react';
import moment from 'moment';
import { Tag, Popconfirm, Button, Space } from 'antd';
import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/es/table';
import { DoubleRightOutlined, LinkOutlined, MoreOutlined } from '@ant-design/icons';
import { filters } from '../../utils/filters';
import { Event } from './types';

export const getColumns = (
  isEditing: any,
  save: any,
  cancel: any,
  edit: any,
  editingKey: string,
  handleDelete: any,
) => {
  const columns: ColumnGroupType<Event> | (ColumnType<Event> & ColumnsType<Event>) = [
    {
      title: 'Date',
      dataIndex: 'datePicker',
      key: 'date',
      sorter: (a, b) => (a.date === b.date ? 0 : a.date < b.date ? -1 : 1),
      sortDirections: ['descend', 'ascend'],
      render: (momentDate, record) => moment(record.date).format('MMM Do YYYY'),
      editable: true,
    },
    {
      title: 'Time',
      dataIndex: 'timePicker',
      key: 'time',
      render: (momentTime, record) => moment(record.date).format('HH:mm'),
      editable: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1),
      sortDirections: ['descend', 'ascend'],
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      title: 'Link',
      dataIndex: 'links',
      key: 'links',
      render: (links) => (
        <>
          {links.map((link: string) => {
            return (
              <a key={link} href={link} onClick={(event) => event.stopPropagation()}>
                <LinkOutlined />
              </a>
            );
          })}
        </>
      ),
      editable: true,
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration) => {
        return <>{duration !== undefined || '' ? duration : 'no data'}</>;
      },
      sorter: (a, b) => a.duration - b.duration,
      editable: true,
    },
    {
      title: 'Type',
      key: 'tag',
      dataIndex: 'tag',
      filters: filters.tag,
      onFilter: (value, record) => record.tag.indexOf(value as string) === 0,
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
      editable: true,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      filters: filters.author,
      onFilter: (value, record) => record.author.indexOf(value as string) === 0,
      sorter: (a, b) => a.author.length - b.author.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Event) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm
              title="Sure to save?"
              onConfirm={() => {
                save(record.id.toString());
              }}
            >
              <a
                onClick={(event) => {
                  event.stopPropagation();
                }}
                style={{ marginRight: 8 }}
              >
                Save
              </a>
            </Popconfirm>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Space>
            <a
              disabled={editingKey !== ''}
              onClick={(event) => {
                event.stopPropagation();
                edit(record);
              }}
            >
              Edit
            </a>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                handleDelete(record.id);
              }}
            >
              <a disabled={editingKey !== ''}>Delete</a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return columns;
};
