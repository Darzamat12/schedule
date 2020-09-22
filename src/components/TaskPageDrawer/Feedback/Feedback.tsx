import React, { useState } from 'react';
import './Feedback.less';
import { Rate, Button, Form, Input } from 'antd';
import { fetchEditData } from '../../../redux/actions';
import { connect } from 'react-redux';

const { TextArea } = Input;

const Feedback: React.FC = ({ currentItem, fetchEditData }: any) => {
  const [isFormShown, setFormShown] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);

  const showForm = () => {
    setFormShown(!isFormShown);
  };

  const onRateChange = (e: any) => {
    setRatingValue(e);
  };

  const onFinish = (values: any) => {
    const addFeedback = () => {
      if (currentItem.feedback && values.feedback) {
        currentItem.feedback.push(values.feedback);
        return currentItem.feedback;
      } else if (!currentItem.feedback && values.feedback) {
        const feedbackArr = [];
        feedbackArr.push(values.feedback);
        return feedbackArr;
      } else {
        return null;
      }
    };
    const currentValues = {
      ...currentItem,
      rating: ratingValue,
      feedback: addFeedback(),
    };
    fetchEditData(currentItem.id, currentValues);
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

const mapStateToProps = (state: any) => {
  return {
    loading: state.editEvent.loading,
    error: state.editEvent.error,
    data: state.editEvent.data,
  };
};

const mapDispatchToProps = {
  fetchEditData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
