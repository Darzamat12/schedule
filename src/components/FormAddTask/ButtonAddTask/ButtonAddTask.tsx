import React, { useState } from 'react';
import { Button } from 'antd';
import ModalWindowForForm from '../ModalWindowForForm';

const ButtonAddTask: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Add new task
      </Button>
      {visible && <ModalWindowForForm visible={visible} handleCancel={handleCancel} />}
    </>
  );
};

export default ButtonAddTask;
