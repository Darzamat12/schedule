import React, { useState } from 'react';
import './Feedback.less';
import { Rate, Button, Form, Input } from 'antd';

const { TextArea } = Input;

const Feedback = () => {
  const [isFormShown, setFormShown] = useState(false);

  const showForm = () => {
    setFormShown(true);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-label">
        <Button onClick={showForm}>Leave feedback</Button>
        <Rate />
      </div>
      {isFormShown && (
        <Form name="feedback" layout={'horizontal'} initialValues={{ remember: true }}>
          <Form.Item
            name="text"
            style={{ marginTop: 20 }}
            rules={[{ required: true, message: 'Please input your text!' }]}
          >
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
