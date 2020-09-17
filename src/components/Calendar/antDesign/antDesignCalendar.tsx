import React, { useState } from 'react';
import { Calendar, Badge } from 'antd';
import { getMonthValue } from '../DateFuncs';
import { getListData, isEmpty } from '../DataFuncs'
import {Scrollbars} from 'react-custom-scrollbars'





function AntDesignCalendar({ props }) {
  const [modalWindowData, setModalWindowData] = useState({});

  function showModalWindow(id: any) {
    setModalWindowData(props.find((el: { id: any; }) => el.id === id));
  }

  function dateCellRender(value: any) {
    const listData = getListData(value, props);
    return (
      <Scrollbars 
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}>
        <ul className="events">
          {listData.map((item) => (
            <li key={item.key} onClick={() => showModalWindow(item.key)}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
        </Scrollbars>
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
        {!isEmpty(modalWindowData) && (
          <div className="modal-window">
            <span>{modalWindowData.name}</span>
            <span>{new Date(modalWindowData.date).toLocaleDateString()}</span>
            <span>{modalWindowData.description}</span>
            <a href={modalWindowData.links} target="_blank">
              Link
            </a>
            <button onClick={() => setModalWindowData({})}>close</button>
          </div>
        )}
      </div>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
  );
}

export default AntDesignCalendar;
