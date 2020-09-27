import React, { useState, useRef } from 'react';
import { Calendar, Badge } from 'antd';
import { getMonthValue } from '../DateFuncs';
import TaskPageDrawer from '../../TaskPageDrawer/TaskPageDrawer';
import { getListData } from '../DataFuncs';

export default function MiniCalendar({ data, tagColors }: any) {
  const [modalWindowData, setModalWindowData] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [calendarMode, setCalendarMode] = useState('month');
  const miniCalendarListItem: any = useRef(null);

  const handleOnClose = () => {
    setShowDrawer(false);
  };

  function showModalWindow(id: any) {
    setCurrentItem(data.find((el: any) => el.id === id));
    setShowDrawer(true);
  }

  function onSelect(value: any) {
    if (calendarMode === 'month') {
      setModalWindowData([]);
      miniCalendarListItem.current.classList.remove('show-list-item');
      setModalWindowData(getListData(value, data, tagColors));
      setTimeout(() => miniCalendarListItem.current.classList.add('show-list-item'), 111);
    }
  }

  function onPanelChange(_: any, mode: any) {
    setCalendarMode(mode);
    setModalWindowData([]);
  }

  function dateCellRender(value: any) {
    const listData = getListData(value, data, tagColors);
    return (
      <ul className="events">
        <li>
          <section>{listData.length}</section>
          <Badge />
        </li>
      </ul>
    );
  }

  function monthCellRender(value: any) {
    const num = getMonthValue(data, value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
      </div>
    ) : null;
  }

  return (
    <>
      <div className="site-calendar-demo-card">
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          fullscreen={false}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
        />
      </div>
      <ul ref={miniCalendarListItem} className="mini-calendar-list-item">
        {modalWindowData &&
          modalWindowData.map((el: any) => (
            <li key={el.key} onClick={() => showModalWindow(el.key)}>
              <Badge color={el.color} text={el.content} />
            </li>
          ))}
      </ul>
      <TaskPageDrawer isShown={showDrawer} handleOnClose={handleOnClose} currentItem={currentItem} />
    </>
  );
}
