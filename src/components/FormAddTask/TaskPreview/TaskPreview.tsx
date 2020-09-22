import React, { useEffect, useState } from 'react';
import { Drawer, Col, Row, Card, Avatar, Empty } from 'antd';
import './TaskPreview.less';
import Info from '../../TaskPageDrawer/Info';

const { Meta } = Card;

const TaskPreview: React.FC = ({ addingItem, tag, activeMarker }: any) => {
  if (addingItem) {
    return (
      <Card
        style={{ margin: 'auto' }}
        cover={
          <div className="task-preview-cover">
            <img
              className="task-preview-image"
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
              {addingItem.author && <span className="task-preview-author">{addingItem.author}</span>}
              {addingItem.name && <h1 className="task-preview-title">{addingItem.name}</h1>}
            </>
          }
          description={
            <>
              <Info
                key={addingItem}
                currentItem={addingItem}
                adminMode={true}
                previewMode={true}
                tag={tag}
                activeMarker={activeMarker}
              />
            </>
          }
        />
      </Card>
    );
  }
  if (!addingItem) {
    return <Empty>No data for preview, please, fill the form</Empty>;
  }
};

export default TaskPreview;
