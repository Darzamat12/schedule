import React, { useEffect } from 'react';
import { Comment, Avatar } from 'antd';
import { fetchEventData } from '../../../redux/actions';

const FeedbackList: React.FC = ({ item, data, needUpdateFeedback }: any) => {
  useEffect(() => {
    fetchEventData(item.id);
  }, needUpdateFeedback);
  const renderFeedback = data.feedback.map((el: any) => {
    return (
      <Comment
        key={el + data.feedback.length}
        style={{ marginLeft: 30 }}
        author={<a>student</a>}
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="student's avatar" />
        }
        content={<p>{el}</p>}
      />
    );
  });
  return <>{renderFeedback}</>;
};

export default FeedbackList;
