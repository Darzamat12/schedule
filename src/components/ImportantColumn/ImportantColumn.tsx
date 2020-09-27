import { Table, Button, Space } from 'antd';
import { useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import ScheduleData from '../../data/scheduleData.json';
import { Check } from './Check';

export const Important = () => {
  const { importantCol } = useSelector((state) => state.importantColData);
  const [state, setState] = useState({
    importantCol,
    filteredInfo: null,
    sortedInfo: null,
  });
  const handleChange = (pagination: any, filters: any) => {
    setState((st) => ({
      ...st,
      filteredInfo: filters,
    }));
  };

  const clearFilters = () => {
    setState((st) => ({
      ...st,
      filteredInfo: null,
    }));
  };

  let { filteredInfo } = state;
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: 'Important mark',
      dataIndex: 'important',
      key: 'important',
      filters: [{ text: 'check impotant', value: true }],
      render: (value: any, record: any) => <Check id={record.id} key={record.key} />,
      onFilter: (value: any, record: any) => {
        return importantCol.some((el: any) => el == record.id);
      },
      ellipsis: true,
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={ScheduleData} onChange={handleChange} />
    </>
  );
};
