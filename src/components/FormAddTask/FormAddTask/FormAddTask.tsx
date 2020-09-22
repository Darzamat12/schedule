import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Upload, DatePicker, Select, Spin, Alert, Switch } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import MapComponent from '../../TaskPageDrawer/Map';
import { fetchPostData } from '../../../redux/actions';
import { connect } from 'react-redux';
import './FormAddTask.less';
import DynamicFieldSet from '../DynamicLinksField';
import { layout, config, validateMessages, normFile, initialTags } from './utils';

const { Option } = Select;
const { TextArea } = Input;

const FormAddTask: React.FC = ({
  handleCancel,
  onFieldsChange,
  onSelectChange,
  onMapClicked,
  activeMarker,
  fetchPostData,
  loading,
  error,
  success,
}: any) => {
  const [isMapShown, setMapShown] = useState(false);
  const [addTagMode, setAddTagMode] = useState(false);
  const [allowFeedback, setAllowFeedback] = useState(true);
  const [tags, setTags] = useState(initialTags);

  const tagOptionsList = tags.map((option: string) => {
    return (
      <Option value={option} key={option}>
        {option}
      </Option>
    );
  });

  const toggleAddTagMode = (flag: boolean, value?: string) => {
    if (value) {
      const newTagsList = [...tags];
      newTagsList.push(value);
      setTags(newTagsList);
    }
    setAddTagMode(flag);
  };

  const showMap = () => {
    setMapShown(!isMapShown);
  };

  const onSwitchChange = (checked: boolean) => {
    setAllowFeedback(checked);
  };

  const onFinish = (values: any) => {
    values = {
      ...values,
      author: values.author ? values.author : 'admin',
      tag: values.tag ? values.tag : 'self education',
      date: new Date(values.date).toJSON(),
      deadline: new Date(values.deadline).toJSON(),
      links: values.links ? [values.links] : ['https://www.google.com/'],
      photo: values.photo ? true : null,
      video: values.video ? true : null,
      map: activeMarker,
      allowFeedback: allowFeedback,
    };
    fetchPostData(values);
  };

  if (loading) {
    return <Spin />;
  }
  if (success) {
    return <Alert message="Your task successfully added" type="success" showIcon />;
  }
  if (error) {
    return <Alert message="Something went wrong" type="error" showIcon />;
  }

  if (!loading && !error) {
    return (
      <Form
        className="form-add-wrapper "
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={{
          tag: 'self education',
        }}
        onFieldsChange={onFieldsChange}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="author" label="Author" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="tag" label="Tag">
          <Input.Group compact>
            <Select
              style={{ width: '30%' }}
              defaultValue={'self education'}
              onChange={(e) => {
                onSelectChange(e);
              }}
            >
              {tagOptionsList}
            </Select>
            {!addTagMode && (
              <Button
                style={{ width: '30%' }}
                type="default"
                onClick={() => {
                  toggleAddTagMode(true);
                }}
              >
                Add own tag
              </Button>
            )}
            {addTagMode && (
              <Input
                name="owntag"
                style={{ width: '30%' }}
                autoFocus={true}
                onBlur={(e) => {
                  toggleAddTagMode(false, e.target.value);
                }}
              />
            )}
          </Input.Group>
        </Form.Item>
        <Form.Item name="date" label="Date" rules={[{ type: 'object', required: true, message: 'Please select time!' }]}>
          <DatePicker format="YYYY/MM/DD" />
        </Form.Item>
        <Form.Item name="deadline" label="Deadline">
          <DatePicker format="YYYY/MM/DD" />
        </Form.Item>

        <Form.Item name="duration" label="Duration" rules={[{ type: 'number', min: 0 }]}>
          <InputNumber min={0} step={0.5} />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea />
        </Form.Item>
        <Form.Item name="result" label="Result">
          <Input />
        </Form.Item>
        <Form.Item name="remark" label="Remark">
          <Input />
        </Form.Item>
        <DynamicFieldSet />
        <Form.Item name="map" label="Map">
          <Button type="dashed" block onClick={showMap}>
            Show map
          </Button>
          {isMapShown && <MapComponent onMapClicked={onMapClicked} activeMarker={activeMarker} />}
        </Form.Item>
        <Form.Item name="allowFeedback" label="Allow feedback" valuePropName="checked">
          <Switch defaultChecked onChange={onSwitchChange} />
        </Form.Item>
        <Form.Item name="photo" label="Photo" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="video" label="Video" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <div className="form-add-bth-wrapper">
          <Button type="primary" htmlType="submit" className="form-add-bth">
            Submit
          </Button>
          <Button type="default" htmlType="submit" onClick={handleCancel} className="form-add-bth">
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.postEvent.loading,
    error: state.postEvent.error,
    data: state.postEvent.data,
    success: state.postEvent.success,
  };
};

const mapDispatchToProps = {
  fetchPostData,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddTask);
