import React from 'react';
import './Info.less';
import { Tag, Button, Comment, Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import MapComponent from '../Map/Map';
import moment from 'moment';
import UploadComponent from '../Upload';
import Feedback from '../Feedback';
import UploadFilesView from '../UploadFilesView';

const Info: React.FC = ({ currentItem, adminMode, previewMode, tag, activeMarker, handleSendFeedback }: any) => {
  const tagColor = (tagName: string) => {
    if (tagName === 'js task' || tagName === 'html task' || tagName === 'codewars') {
      return 'green';
    }
    if (tagName === 'lecture' || tagName === 'meetup' || tagName === 'self education') {
      return 'blue';
    }
    if (tagName === 'test') {
      return 'orange';
    }
    if (tagName === 'cross-check') {
      return 'purple';
    }
    if (tagName === 'deadline') {
      return 'red';
    }
  };

  const renderLinks = () => {
    if (currentItem.links) {
      return currentItem.links.map((link: string) => {
        return <a href={link} key={link}>{link}</a>;
      });
    } else {
      return;
    }
  };

  const renderFeedback = () => {
    if (currentItem.feedback) {
      return currentItem.feedback.map((el: any) => {
        return (
          <Comment
            key={el}
            style={{ marginLeft: 30 }}
            author={<a>student</a>}
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="student's avatar" />
            }
            content={<p>{el}</p>}
          />
        );
      });
    } else {
      return;
    }
  };

  return (
    <>
      <div className="info-tag-wrapper">
        {currentItem.tag && (
          <Tag color={tagColor(currentItem.tag)} key={currentItem.tag}>
            {currentItem.tag}
          </Tag>
        )}
        {tag && (
          <Tag color={tagColor(tag)} key={tag}>
            {tag}
          </Tag>
        )}
        {currentItem.date && <span>{moment(currentItem.date).format('YYYY-MM-DD')}</span>}
      </div>
      {currentItem.deadline && (
        <div className="info-tag-wrapper">
          <Tag color="red" key={currentItem.deadline}>
            {'deadline'}
          </Tag>
          <span>{moment(currentItem.deadline).format('YYYY-MM-DD')}</span>
        </div>
      )}
      {currentItem.duration && <p className="info-text">Duration: {currentItem.duration}</p>}
      {currentItem.description && <p className="info-text">Description: {currentItem.description}</p>}
      {currentItem.result && <p className="info-text">Result: {currentItem.result}</p>}
      {currentItem.remark && <p className="info-text">Remark: {currentItem.remark}</p>}
      {adminMode && !previewMode && <UploadComponent />}
      {currentItem.links && <div>Links: {renderLinks()}</div>}
      {currentItem.map && (
        <div className="task-modal-map">
          <MapComponent activeMarker={currentItem.map} />
        </div>
      )}
      {activeMarker && Object.keys(activeMarker).length !== 0 && (
        <div className="task-modal-map">
          <MapComponent activeMarker={activeMarker} />
        </div>
      )}
      {currentItem.photo && (
        <>
          <UploadFilesView fileType="photo" />
        </>
      )}
      {currentItem.video && (
        <div>
          <UploadFilesView fileType="video" />
        </div>
      )}
      {renderFeedback()}
      {adminMode && !previewMode && (
        <Button style={{ marginTop: 20 }} type="dashed" block>
          <EditOutlined />
        </Button>
      )}
      {!adminMode && <Feedback currentItem={currentItem} handleSendFeedback={handleSendFeedback} />}
    </>
  );
};

export default Info;
