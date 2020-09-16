import React, { useState, useRef } from 'react'
import { Calendar, Badge } from 'antd';
import { filterByDate, getMonthValue } from '../DateFuncs'
import TaskPageDrawer from '../../TaskPageDrawer/TaskPageDrawer'



function getListData(value, props) {
  let listData = [];
  filterByDate(props, value).forEach((el) => {
    listData.push({ type: 'success', content: el.name, key: el.id });
  });

  return listData || [];
}

export default function MiniCalendar({ props }) {
  const [modalWindowData, setModalWindowData] = useState(false);
  const [currentItem, setCurrentItem] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [calendarMode, setCalendarMode] = useState('month')
  const miniCalendarListItem = useRef(null)

  const handleOnClose = () => { setShowDrawer(false) }

  function showModalWindow(id) {
    setCurrentItem(props.find((el) => el.id === id));
    setShowDrawer(true)
  }

  function onSelect(value) {

    if (calendarMode === 'month') {

      setModalWindowData(false)
      miniCalendarListItem.current.classList.remove('show-list-item');
      setModalWindowData(getListData(value, props));
      setTimeout(() => miniCalendarListItem.current.classList.add('show-list-item'), 111);
    }
  }

  function onPanelChange(value, mode) {
    setCalendarMode(mode)
    setModalWindowData(false)
  }

  function dateCellRender(value) {
    const listData = getListData(value, props);
    return (
      <ul className="events">
        <li>
          <section>{listData.length}</section>
          <Badge />
        </li>
      </ul>
    );
  }


  function monthCellRender(value) {
    const num = getMonthValue(props, value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
      </div>
    ) : null;
  }



  return (
    <><div className="site-calendar-demo-card">
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} fullscreen={false} onSelect={onSelect} onPanelChange={onPanelChange} />
    </div>
      <ul ref={miniCalendarListItem} className="mini-calendar-list-item">
        {modalWindowData && modalWindowData.map(el =>
          <li key={el.key} onClick={() => showModalWindow(el.key)}>
            <Badge status={el.type} text={el.content} /></li>
        )}
      </ul>
      <TaskPageDrawer
        isShown={showDrawer}
        handleOnClose={handleOnClose}
        currentItem={currentItem} />
    </>)
}