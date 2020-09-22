import React, { useState } from 'react';
import { Modal, Tabs } from 'antd';
import './ModalWindowForForm.less';
import FormAddTask from '../FormAddTask';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import TaskPreview from '../TaskPreview';

const ModalWindowForForm: React.FC = ({ visible, handleCancel }: any) => {
  const [addingItem, setAddingItem] = useState(null);
  const [tag, setTag] = useState('self education');
  const [activeMarker, setActiveMarker] = useState({});

  const { TabPane } = Tabs;
  const { width } = useWindowDimensions();

  const onMapClicked = (mapProps: any, map: any, event: any) => {
    const coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setActiveMarker(coords);
  };

  const onFieldsChange = (values: any) => {
    if (values[0]) {
      if (values[0].name[0] === 'links') {
        values = {
          ...((addingItem as null) || {}),
          [values[0].name[0]]: [values[0].value],
        };
      } else {
        values = {
          ...((addingItem as null) || {}),
          [values[0].name[0]]: values[0].value,
        };
      }
      setAddingItem(values);
    }
  };

  const onSelectChange = (e: string) => {
    setTag(e);
  };

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      width={
        width >= 1280 ? '45vw' : width >= 960 && width < 1280 ? '55vw' : width < 960 && width > 800 ? '65vw' : '100vw'
      }
      style={{ maxWidth: '100%' }}
      title={
        <Tabs defaultActiveKey="1" style={{ marginBottom: 32 }}>
          <TabPane tab="Add new task" key="1">
            <FormAddTask
              handleCancel={handleCancel}
              onFieldsChange={onFieldsChange}
              onSelectChange={onSelectChange}
              onMapClicked={onMapClicked}
              activeMarker={activeMarker}
            />
          </TabPane>
          <TabPane tab="Task preview" key="2">
            <TaskPreview addingItem={addingItem} tag={tag} activeMarker={activeMarker} />
          </TabPane>
        </Tabs>
      }
      bodyStyle={{ display: 'none' }}
      footer={false}
    ></Modal>
  );
};

export default ModalWindowForForm;
