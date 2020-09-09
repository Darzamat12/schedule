import React from 'react';
import { Form, Input, InputNumber, Button, Rate, Upload, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const user = 'user';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const Demo = () => {
  const onFinish = (values: any) => {
    values.user = {
      ...values.user,
      date: new Date(values.user.date).toJSON(),
      deadline: new Date(values.user.deadline).toJSON(),
    };
    //Функция возвращающая json формы
    console.log(values);
  };

  return (
    <Form
      className="modal-window"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={[user, 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={[user, 'author']} label="Author" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={[user, 'tag']} label="Tag">
        <Input />
      </Form.Item>
      <Form.Item name={[user, 'date']} label="Date" {...config}>
        <DatePicker format="YYYY/MM/DD" />
      </Form.Item>
      <Form.Item name={[user, 'deadline']} label="Deadline">
        <DatePicker format="YYYY/MM/DD" />
      </Form.Item>

      <Form.Item name={[user, 'duration']} label="Duration" rules={[{ type: 'number', min: 0 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={[user, 'description']} label="Description">
        <Input />
      </Form.Item>

      <Form.Item name={[user, 'result']} label="Result">
        <Input />
      </Form.Item>

      <Form.Item name={[user, 'remark']} label="Remark">
        <Input />
      </Form.Item>

      <Form.Item name={[user, 'links']} label="Links">
        <Input />
      </Form.Item>
      <div className="flex">
        <Form.Item name={[user, 'photo']} label="Photo" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item name={[user, 'video']} label="Video" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item name={[user, 'map']} label="Map" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
      </div>
      <Form.Item initialValue={3.5} name={[user, 'rate']} label="Rate">
        <Rate />
      </Form.Item>

      <Button type="primary" htmlType="submit" className="submit-btn">
        Submit
      </Button>
    </Form>
  );
};
