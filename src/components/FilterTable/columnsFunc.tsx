import React from 'react';
import moment from 'moment';
import { Tag, Popconfirm, Space } from 'antd';
import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/es/table';
import { LinkOutlined } from '@ant-design/icons';
import { filters } from '../../utils/filters';
import { Event } from './types';
import { tagsMap } from '../../utils/settingsData';

export const getColumns = (
  isEditing: any,
  save: any,
  cancel: any,
  edit: any,
  editingKey: string,
  handleDelete: any,
  userPreferences: any,
) => {
  const columns: ColumnGroupType<Event> | (ColumnType<Event> & ColumnsType<Event>) = [
    {
      title: 'Date',
      dataIndex: 'datePicker',
      key: 'date',
      className: userPreferences.readable ? 'readable-bold-2' : '',
      sorter: (a, b) => (a.date === b.date ? 0 : a.date < b.date ? -1 : 1),
      sortDirections: ['descend', 'ascend'],
      render: (momentDate, record) => moment(record.date).format('MMM Do YYYY'),
      editable: true,
    },
    {
      title: 'Time',
      dataIndex: 'timePicker',
      key: 'time',
      className: userPreferences.readable ? 'readable-bold-2' : '',
      render: (momentTime, record) => moment(record.date).format('HH:mm'),
      editable: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: userPreferences.readable ? 'readable-bold-2' : '',
      sorter: (a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1),
      sortDirections: ['descend', 'ascend'],
      render: (text) => <a>{text}</a>,
      editable: true,
    },
    {
      title: 'Link',
      dataIndex: 'links',
      key: 'links',
      className: userPreferences.readable ? 'readable-bold-2' : '',
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
      className: userPreferences.readable ? 'readable-bold-2' : '',
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
      className: userPreferences.readable ? 'readable-bold-2' : '',
      onFilter: (value, record) => record.tag.indexOf(value as string) === 0,
      render: (tag) => {
        const tagColor = tagsMap.get(tag) || 'self_education';
        return (
          <Tag
            className={userPreferences.readable ? 'readable-bold-1' : ''}
            style={{
              borderColor: userPreferences.tagColor[tagColor],
              color: userPreferences.tagColor[tagColor],
              backgroundColor: `${userPreferences.tagColor[tagColor]}10`,
            }}
            key={tag}
          >
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
      className: userPreferences.readable ? 'readable-bold-2' : '',
      filters: filters.author,
      onFilter: (value, record) => record.author.indexOf(value as string) === 0,
      sorter: (a, b) => a.author.length - b.author.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    {
      title: 'Action',
      key: 'action',
      className: userPreferences.readable ? 'readable-bold-2' : '',
      render: (_: any, record: Event) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm
              className={userPreferences.readable ? 'readable-bold-1' : ''}
              title="Sure to save?"
              onConfirm={() => {
                save(record.id.toString());
              }}
            >
              <a
                className={userPreferences.readable ? 'readable-bold-1' : ''}
                onClick={(event) => {
                  event.stopPropagation();
                }}
                style={{ marginRight: 8 }}
              >
                Save
              </a>
            </Popconfirm>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a className={userPreferences.readable ? 'readable-bold-1' : ''}>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Space>
            <a
              className={userPreferences.readable ? 'readable-bold-1' : ''}
              disabled={editingKey !== ''}
              onClick={(event) => {
                event.stopPropagation();
                edit(record);
              }}
            >
              Edit
            </a>
            <Popconfirm
              className={userPreferences.readable ? 'readable-bold-1' : ''}
              title="Sure to delete?"
              onConfirm={() => {
                handleDelete(record.id);
              }}
            >
              <a className={userPreferences.readable ? 'readable-bold-1' : ''} disabled={editingKey !== ''}>
                Delete
              </a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return columns;
};
