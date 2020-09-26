import React, { useState } from 'react';
import { Calendar, Badge } from 'antd';
import { getMonthValue } from '../DateFuncs';
import { getListData } from '../DataFuncs'
import {Scrollbars} from 'react-custom-scrollbars'
import { ModalWidnow } from './antDesignModal';






function AntDesignCalendar({ props }) {
  const [modalWindowData, setModalWindowData] = useState({});
  const [showWindow, setShowWindow] = useState(false);
  const handleOnClose = () => {
    setShowWindow(false);
  };
  function showModalWindow(id: any) {
    setModalWindowData(props.find((el: { id: any; }) => el.id === id));
    setShowWindow(true);
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
            <li style={{ backgroundColor: item.color }} key={item.key} onClick={() => showModalWindow(item.key)}>
              <Badge color={item.color} text={item.content} />
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
        {showWindow && <ModalWidnow isShow={showWindow} currentItem={modalWindowData} handleOnClose={handleOnClose} />}
      </div>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
  );
}

export default AntDesignCalendar;
