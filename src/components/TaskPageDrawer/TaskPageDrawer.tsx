import React, { useState } from 'react';
import './TaskPageDrawer.less';
import { Drawer, Col, Row, Card, Avatar } from 'antd';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Info from './Info/Info';
import { connect } from 'react-redux';
import { Event } from '../../interfaces/Event';

const { Meta } = Card;

const TaskPageDrawer: React.FC<{ isShown: boolean; handleOnClose: any; currentItem: Event; adminMode?: boolean }> = ({
  isShown,
  handleOnClose,
  currentItem,
  adminMode,
}) => {
  // const [adminMode, setAdminMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  console.log(adminMode);
  const { width } = useWindowDimensions();
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
                <img
                  className="task-page-drawer-image"
                  alt="sloth"
                  src="https://res.cloudinary.com/dv4fxot90/image/upload/v1599812573/img/sloth_hd7uor.jpg"
                />
              </div>
            }
          >
            <Meta
              title={
                <>
                  <Avatar src="https://res.cloudinary.com/dv4fxot90/image/upload/v1598976466/img/sloth_ugzwwr.jpg" />
                  <span className="task-modal-author">{currentItem.author}</span>
                  <h1>{currentItem.name}</h1>
                </>
              }
              description={
                !editMode && (
                  <div>
                    <Info currentItem={currentItem} adminMode={adminMode} />
                  </div>
                )
              }
            />
          </Card>
        </Col>
      </Row>
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    adminMode: state.userMode.isAdmin,
  };
};

export default connect(mapStateToProps, null)(TaskPageDrawer);
