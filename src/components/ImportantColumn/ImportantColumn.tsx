import { Table, Button, Space } from 'antd';
import {useState} from 'react';
import React from 'react'
import ScheduleData from '../../data/scheduleData.json'
import './ImportantColumn.less'

export const Check = ({value, id}) =>{
  const [ state, setState] = useState(()=>{
    return {
      checked: value ? true : false,
      activeClass: value ? "active" : "",
    }
  })
  const onClick = ()=> {
    let index = ScheduleData.findIndex(el => el.id == id )
    setState(({checked})=>{
      return{
      ...state,
      checked: !checked,
      activeClass: !checked ? "active" : "",
    }})
    ScheduleData[index].important = !state.checked
    console.log(ScheduleData[index].important, !state.checked)
  }
  return (
    <div className={"importantWrapper"} onClick={()=>onClick()}>
      <div className={`importantIco ${state.activeClass}`} />
    </div>
  )
}

export class Important extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => {
          return <a>{text}</a>},
      },
      {
        title: '!',
        dataIndex: 'important',
        key: 'important',
        filters: [
          { text: 'ok', value: true },
        ],
        render: (value, record)=> {
          return <Check value={value} id={record.id}/>
        },
        filteredValue: filteredInfo.important || null,
        onFilter: (value, record) => {
          if(record.hasOwnProperty('important'))
            return value==record.important
          else
            return !value
        },
        ellipsis: true,
      },
    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={ScheduleData} onChange={this.handleChange} />
      </>
    );
  }
}
