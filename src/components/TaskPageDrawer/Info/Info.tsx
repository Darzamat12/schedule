import React, { useEffect, useState } from 'react';
import { Tag, Button, Rate, Spin } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import MapComponent from '../Map';
import moment from 'moment';
import UploadComponent from '../Upload';
import Feedback from '../Feedback';
import UploadFilesView from '../UploadFilesView';
import FeedbackList from '../FeedbackList';
import { tagsMap } from '../../../utils/settingsData';

const Info: React.FC = ({
  currentItem,
  adminMode,
  editMode,
  tag,
  fetchEventData,
  error,
  loading,
  data,
  turnOnEditMode,
  darkTheme,
  userPreferences,
}: any) => {
  const [needUpdateFeedback, setNeedUpdateFeedback] = useState(false);

  const renderTag = (tag: string) => {
    const tagColor = tagsMap.get(tag) || 'self_education';
    return (
      <Tag
        className={userPreferences.readable ? 'readable-bold-1' : ''}
        style={{
          borderColor: userPreferences.tagColor[tagColor],
          color: userPreferences.tagColor[tagColor],
          backgroundColor: `${userPreferences.tagColor[tagColor]}10`,
        }}
        key={tag}
      >
        {tag}
      </Tag>
    );
  };

  const handleOpenFeedback = () => {
    setNeedUpdateFeedback(false);
  };

  const handleSendFeedback = () => {
    setNeedUpdateFeedback(true);
  };

  useEffect(() => {
    fetchEventData(currentItem.id);
  }, [currentItem]);

  const countRating = () => {
    if (currentItem.rating) {
      let sum = 0;
      for (let i = 0; i < currentItem.rating.length; i++) {
        sum = sum + currentItem.rating[i];
      }
      sum = sum / currentItem.rating.length;
      return sum;
    } else {
      return;
    }
  };

  const renderLinks = () => {
    if (data.links) {
      const linksList = data.links.map((link, i) => {
        return (
          <a key={`${link}${i}`} href={link}>
            {link}
          </a>
        );
      });
      return linksList;
    }
  };

  if (loading || !data) {
    return <Spin />;
  }

  if (error) {
    return <p>Error, try again</p>;
  }

  if (data) {
    return (
      <>
        <div className="info-tag-wrapper">
          <h1 className="task-page-drawer-title">{data.name}</h1>
          {data.rating && <Rate allowHalf value={countRating()} />}
          {data.tag && renderTag(data.tag)}
          {data.date && <span>{moment(data.date).format('YYYY-MM-DD')}</span>}
        </div>
        {data.deadline && (
          <div className="info-tag-wrapper">
            <Tag color="red" key={data.deadline}>
              {'deadline'}
            </Tag>
            <span>{moment(data.deadline).format('YYYY-MM-DD')}</span>
          </div>
        )}
        {data.duration && <p className="info-text">Duration: {data.duration}</p>}
        {data.description && <p className="info-text">Description: {data.description}</p>}
        {data.result && <p className="info-text">Result: {data.result}</p>}
        {data.remark && <p className="info-text">Remark: {data.remark}</p>}
        {adminMode && !editMode && <UploadComponent />}
        {data.links && <div className="info-link-wrapper">{renderLinks()}</div>}
        {data.map && Object.keys(data.map).length !== 0 && (
          <div className="task-modal-map">
            <MapComponent darkTheme={darkTheme} activeMarker={data.map} />
          </div>
        )}
        {data.photo && (
          <>
            <UploadFilesView fileType="photo" />
          </>
        )}
        {data.video && (
          <div>
            <UploadFilesView fileType="video" />
          </div>
        )}
        {data.feedback && <FeedbackList item={data} needUpdateFeedback={needUpdateFeedback} />}
        {adminMode && !editMode && (
          <Button style={{ marginTop: 20 }} type="dashed" block onClick={turnOnEditMode}>
            <EditOutlined />
          </Button>
        )}
        {!adminMode && data.allowFeedback && (
          <Feedback item={data} handleSendFeedback={handleSendFeedback} handleOpenFeedback={handleOpenFeedback} />
        )}
      </>
    );
  }
};

export default Info;
