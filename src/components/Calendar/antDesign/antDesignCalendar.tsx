import React, { useState } from 'react';
import { Calendar, Badge } from 'antd';
import { filterByDate, getMonthValue } from '../DateFuncs'

function getListData(value, props) {
  let listData = [];
  filterByDate(props, value).forEach((el) => {
    listData.push({ type: 'success', content: el.name, key: el.id });
  });

  return listData || [];
}





function AntDesignCalendar({ props }) {

  const [modalWindowData, setModalWindowData] = useState(false);

  function showModalWindow(id) {
    setModalWindowData(props.find((el) => el.id === id));
  }



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

  return (
    <div className="calendar-container">
      <div>
        {modalWindowData && (
          <div className="modal-window">
            <span>{modalWindowData.name}</span>
            <span>{new Date(modalWindowData.date).toLocaleDateString()}</span>
            <span>{modalWindowData.description}</span>
            <a href={modalWindowData.links} target="_blank">
              Link
            </a>
            <button onClick={() => setModalWindowData(false)}>close</button>
          </div>
        )}
      </div>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
  );
}

export default AntDesignCalendar;
