import React from 'react';
import './Info.less';
import { Tag, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import MapComponent from '../Map/Map';
import moment from 'moment';
import UploadComponent from '../Upload';
import Feedback from '../Feedback';

const Info = ({ currentItem, adminMode }) => {
  const linksList = currentItem.links.map((link: string) => {
    return <a href={link}>{link}</a>;
  });

  return (
    <>
      <div className="info-tag-wrapper">
        <Tag color="green" key={currentItem.tag}>
          {currentItem.tag}
        </Tag>
        <span>{moment(currentItem.date).format('YYYY-MM-DD')}</span>
      </div>
      {currentItem.deadline && (
        <div className="info-tag-wrapper">
          <Tag color="red" key={currentItem.deadline}>
            {'deadline'}
          </Tag>
          <span>{moment(currentItem.deadline).format('YYYY-MM-DD')}</span>
        </div>
      )}
      <p className="info-text">{currentItem.description}</p>
      {currentItem.remark && <p className="info-text">{currentItem.remark}</p>}
      {adminMode && <UploadComponent />}
      {currentItem.links !== null && <div>{linksList}</div>}
      {currentItem.map !== null && (
        <div className="task-modal-map">
          <MapComponent />
        </div>
      )}
      {adminMode && (
        <Button style={{ marginTop: 20 }} type="dashed" block>
          <EditOutlined />
        </Button>
      )}
      {!adminMode && <Feedback />}
    </>
  );
};

export default Info;
