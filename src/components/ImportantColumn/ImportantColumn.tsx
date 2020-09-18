import { Table, Button, Space } from 'antd';
import {useState} from 'react';
import React from 'react'
import ScheduleData from '../../data/scheduleData.json'

const importantWrapper = {
  height: "100%",
  width: "100%",
  cursor: "pointer",
}

const importantIco = {
  height: "20px",
  width: "20px",
  backgroundColor: "#888",
  borderRadius: "100%",
}

const importantIcoActive = {
  height: "20px",
  width: "20px",
  backgroundColor: "red",
  borderRadius: "100%",
}



export const Check = ({value, id}) =>{
  const [ state, setState] = useState({
    checked: value,
    activeClass: value ? importantIcoActive : importantIco,
    key: id,
  })
  const onClick = ()=> {
    let index = ScheduleData.findIndex(el => el.id == id )
    setState(({checked, key})=>({
      ...state,
      checked: !checked,
      activeClass: !checked ? importantIcoActive : importantIco,
    }))
    ScheduleData[index].important = state.checked
    console.log(ScheduleData[index], state.checked)
  }
  return (
    <div style= {importantWrapper} onClick={()=>onClick()}>
      <div style={state.activeClass}/>
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

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [

      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '!',
        dataIndex: 'important',
        key: 'important',
        filters: [
          { text: 'ok', value: true },
          { text: 'no', value: false },
        ],
        render: (value, record)=> {
          console.log(value)
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
