import React, { useState } from 'react';
import { Rate, Button, Form, Input } from 'antd';

const { TextArea } = Input;

const Feedback: React.FC = ({ item, fetchEditData, handleSendFeedback, handleOpenFeedback }: any) => {
  const [isFormShown, setFormShown] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);

  const showForm = () => {
    handleOpenFeedback();
    setFormShown(!isFormShown);
  };

  const onRateChange = (e: any) => {
    setRatingValue(e);
  };

  const onFinish = (values: any) => {
    const addFeedback = () => {
      if (item.feedback && values.feedback) {
        item.feedback.push(values.feedback);
        return item.feedback;
      } else if (!item.feedback && values.feedback) {
        const feedbackArr = [];
        feedbackArr.push(values.feedback);
        return feedbackArr;
      } else {
        return null;
      }
    };
    const addRating = () => {
      if (item.rating && ratingValue) {
        item.rating.push(ratingValue);
        return item.rating;
      } else if (!item.rating && ratingValue) {
        const ratingArr = [];
        ratingArr.push(ratingValue);
        return ratingArr;
      } else {
        return null;
      }
    };
    const currentValues = {
      ...item,
      rating: addRating(),
      feedback: addFeedback(),
    };
    fetchEditData(item.id, currentValues);
    handleSendFeedback();
    setFormShown(false);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-label">
        <Button onClick={showForm}>Leave feedback</Button>
      </div>
      {isFormShown && (
        <Form name="feedback" layout={'horizontal'} initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item>
            <Rate
              allowHalf
              style={{ marginTop: 10 }}
              onChange={(e) => {
                onRateChange(e);
              }}
            />
          </Form.Item>
          <Form.Item name="feedback" rules={[{ required: true, message: 'Please input your text!' }]}>
            <TextArea />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Send feedback
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Feedback;
