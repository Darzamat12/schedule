import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'antd';
import { isEmpty } from '../DataFuncs';

export function ModalWidnow({ props, handleOnClose }) {
  console.log(props);


  return (
    <>

      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={!isEmpty(props)}
        onOk={() => handleOnClose()}
        onCancel={() => handleOnClose()}
      >
        <p>{props.name}</p>
        <p>{props.name}</p>
        <p>{props.name}</p>
      </Modal>
    </>
  );

}
