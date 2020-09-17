import React, { useState } from 'react';
import { Calendar, Badge } from 'antd';
import { getMonthValue } from '../DateFuncs';
import { getListData, isEmpty } from '../DataFuncs'
import { ModalWidnow } from './antDesignModal';





function AntDesignCalendar({ props }) {
  const [modalWindowData, setModalWindowData] = useState({});
  const handleOnClose = () => {
    setModalWindowData({});
  };
  function showModalWindow(id: any) {
    setModalWindowData(props.find((el: { id: any; }) => el.id === id));
  }

  function dateCellRender(value: any) {
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

  function monthCellRender(value: any) {
    const num = getMonthValue(props, value);
    return num ? (
      <div className="notes-month">
        <span>Number of events</span>
        <section>{num}</section>
      </div>
    ) : null;
  }

  return (
    <div className="calendar-container">
      <div>
        <ModalWidnow props={modalWindowData} handleOnClose={handleOnClose} />
      </div>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
  );
}

export default AntDesignCalendar;
