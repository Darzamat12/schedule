import { Table, Button, Space } from 'antd';
import {useState} from 'react';
import React from 'react'
import ScheduleData from '../../data/scheduleData.json'
import './ImportantColumn.less'

const Check = ({value, id}) =>{
  let index = ScheduleData.findIndex(el=>el.id==id)
  const [ state, setState] = useState(()=>{
    return {
      id,
      index,
      checked: importantCol[index] ? true : false,
      activeClass: importantCol[index] ? "active" : "",
      value,
    }
  })
  if(id!=state.id){
    setState((st)=>{
      return {
        id,
        index,
        checked: importantCol[index] ? true : false,
        activeClass: importantCol[index] ? "active" : "",
        value,
      }
    })
  }
  const onClick = ()=> {
    importantCol[state.index] = state.checked ? false : state.value;
    localStorage.setItem("important", JSON.stringify(importantCol));
    setState(({checked})=>{
      return{
      ...state,
      checked: !checked,
      activeClass: !checked ? "active" : "",
    }})
  }
  return (
    <div className={"importantWrapper"} onClick={()=>onClick()}>
      <div className={`importantIco ${state.activeClass}`} />
    </div>
  )
}

const localCol = JSON.parse(localStorage.getItem("important"))
const importantCol = localCol ? localCol : new Array(ScheduleData.length).fill(false)

export class Important extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  render() {
    let { filteredInfo } = this.state;
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
        render: (value, record, i)=> <Check value={record} id={record.id}/>,
        filteredValue: filteredInfo.important || null,
        onFilter: (value, record) => {
          return importantCol.some(el => el.id == record.id)
        },
        ellipsis: true,
      },
    ];
    return (
      <>
        <Table columns={columns} dataSource={ScheduleData} onChange={this.handleChange} />
      </>
    );
  }
}
