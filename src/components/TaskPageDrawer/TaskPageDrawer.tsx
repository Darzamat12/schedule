import React, { useEffect, useState } from 'react';
import { Drawer, Col, Row, Card, Avatar } from 'antd';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Info from './Info';
import FormEditTask from './FormEditTask';

const { Meta } = Card;

const TaskPageDrawer: React.FC = ({ isShown, isAdmin, darkTheme, handleOnClose, currentItem, editMode }: any) => {
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    setIsEdit(editMode);
  }, [currentItem]);

  const owlsImage = 'https://res.cloudinary.com/dv4fxot90/image/upload/v1601110530/schedule/owls_big_xkdavi.png';
  const slothImage = 'https://res.cloudinary.com/dv4fxot90/image/upload/v1601109894/schedule/sloth_big_jsio5q.png';
  const owlsAvatar = 'https://res.cloudinary.com/dv4fxot90/image/upload/v1601110529/schedule/owls_ava_emxxwe.png';
  const slothAvatar = 'https://res.cloudinary.com/dv4fxot90/image/upload/v1601110529/schedule/sloth_ava_fmo9ir.png';
  const previewCover = darkTheme ? owlsImage : slothImage;
  const previewAvatar = darkTheme ? owlsAvatar : slothAvatar;

  const { width } = useWindowDimensions();

  const turnOnEditMode = () => {
    setIsEdit(true);
  };

  const turnOffEditMode = () => {
    setIsEdit(false);
  };

  const TaskPageMode = ({ currentItem }: any) => {
    if (isEdit) {
      return <FormEditTask currentItem={currentItem} turnOffEditMode={turnOffEditMode} />;
    }
    if (!isEdit) {
      return (
        <div>
          <Info
            key={currentItem.id}
            currentItem={currentItem}
            adminMode={isAdmin}
            editMode={isEdit}
            turnOnEditMode={turnOnEditMode}
          />
        </div>
      );
    }
  };

  return (
    <Drawer
      width={
        width >= 1280 ? '45vw' : width >= 960 && width < 1280 ? '55vw' : width < 960 && width > 800 ? '65vw' : '100vw'
      }
      placement="right"
      closable={true}
      onClose={handleOnClose}
      visible={isShown}
      style={{ direction: 'rtl' }}
    >
      <Row style={{ direction: 'ltr' }}>
        <Col span={24}>
          <Card
            style={{ margin: 'auto' }}
            cover={
              <div className="task-page-drawer-cover">
                <img className="task-page-drawer-image" alt="sloth" src={previewCover} />
              </div>
            }
          >
            <Meta
              title={
                <>
                  <Avatar src={previewAvatar} />
                  <span className="task-page-drawer-author">{currentItem.author}</span>
                </>
              }
              description={<TaskPageMode currentItem={currentItem} adminMode={isAdmin} />}
            />
          </Card>
        </Col>
      </Row>
    </Drawer>
  );
};

export default TaskPageDrawer;
