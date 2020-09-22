import React, { useEffect, useState } from 'react';
import './TaskPageDrawer.less';
import { Drawer, Col, Row, Card, Avatar, Rate } from 'antd';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Info from './Info';
import { fetchEventData } from '../../redux/actions';
import { connect } from 'react-redux';

const { Meta } = Card;

const TaskPageDrawer: React.FC = ({ isShown, handleOnClose, currentItem, fetchEventData }: any) => {
  const [adminMode, setAdminMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

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
                  src="https://res.cloudinary.com/dv4fxot90/image/upload/v1600690472/schedule/sloth-big_hbqhl7.png"
                />
              </div>
            }
          >
            <Meta
              title={
                <>
                  <Avatar src="https://res.cloudinary.com/dv4fxot90/image/upload/v1598976466/img/sloth_ugzwwr.jpg" />
                  <span className="task-page-drawer-author">{currentItem.author}</span>
                  <div>
                    <h1 className="task-page-drawer-title">{currentItem.name}</h1>
                    {currentItem.rating && <Rate value={currentItem.rating} />}
                  </div>
                </>
              }
              description={
                !editMode && (
                  <div>
                    <Info key={currentItem} currentItem={currentItem} adminMode={adminMode} previewMode={false} />
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

const mapStateToProps = (state: any) => {
  return {
    loading: state.eventData.loading,
    error: state.eventData.error,
    data: state.eventData.data,
  };
};

const mapDispatchToProps = {
  fetchEventData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPageDrawer);
