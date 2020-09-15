import React from 'react'
import { Calendar, Badge } from 'antd';
import { filterByDate, getMonthValue } from '../DateFuncs'

function onPanelChange(value, mode) {
  console.log(value, mode);
}


function getListData(value, props) {
  let listData = [];
  filterByDate(props, value).forEach((el) => {
    listData.push({ type: 'success', content: el.name, key: el.id });
  });

  return listData || [];
}

export default function MiniCalendar({ props }) {

  function dateCellRender(value) {
    const listData = getListData(value, props);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.key} onClick={() => showModalWindow(item.key)}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }


  function monthCellRender(value) {
    const num = getMonthValue(props, value);
    return num ? (
      <div className="notes-month">
        <span>Number of events</span>
        <section>{num}</section>
      </div>
    ) : null;
  }



  return (<div className="site-calendar-demo-card">
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} fullscreen={false} onPanelChange={onPanelChange} />
  </div>)
}