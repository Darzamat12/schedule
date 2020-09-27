import React from 'react';
import { Modal } from 'antd';
import moment from 'moment';

export function ModalWidnow({ isShow, currentItem, handleOnClose }: any) {
  return (
    <>
      <Modal
        wrapClassName="calendar-modal-window-container"
        title={currentItem.name}
        centered
        footer={null}
        onOk={() => handleOnClose()}
        onCancel={() => handleOnClose()}
        visible={isShow}
      >
        <p>Deadline: {moment(currentItem.date).format('LLL')}</p>
        <p>Author: {currentItem.author}</p>
        <p>{currentItem.description}</p>
        {isShow &&
          currentItem.links.map((el: string | undefined) => (
            <a href={el} target="_blank">
              Tык
            </a>
          ))}
      </Modal>
    </>
  );
}
