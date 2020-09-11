import React, { useState } from 'react';
import { Calendar, Badge } from 'antd';

function filterByDate(props, value) {
  let result = props.filter((el) => new Date(el.date).toLocaleDateString() == new Date(value).toLocaleDateString());

  return result;
}

function AntDesignCalendar({ props }) {
  const [modalWindowData, setModalWindowData] = useState(false);

  function showModalWindow1(id) {
    let ont = props.find((el) => el.id === id);
    setModalWindowData(ont);
  }

  function getListData(value) {
    let listData = [];
    filterByDate(props, value).forEach((el) => {
      listData.push({ type: 'success', content: el.name, key: el.id });
    });

    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.key} onClick={() => showModalWindow1(item.key)}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() + 1) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
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
