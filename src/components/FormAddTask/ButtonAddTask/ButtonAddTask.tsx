import React, { useState } from 'react';
import { Button } from 'antd';
import ModalWindowForForm from '../ModalWindowForForm';
import { connect } from 'react-redux';

const ButtonAddTask: React.FC = (props: any) => {
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
        style={{ margin: '0 10px 10px 0' }}
        className={props.userPreferences.readable ? 'readable-bold-1' : ''}
      >
        <p>Add new task</p>
      </Button>
      {visible && <ModalWindowForForm visible={visible} handleCancel={handleCancel} />}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userPreferences: state.userPreferences,
  };
};

export default connect(mapStateToProps, null)(ButtonAddTask);
