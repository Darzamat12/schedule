import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Upload, DatePicker, Select, Spin, Alert, Switch, Drawer } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import MapComponent from '../../TaskPageDrawer/Map';
import DynamicFieldSet from '../DynamicLinksField';
import { layout, validateMessages, normFile, initialTags, timeZoneListAdd } from './utilsForForms';
import moment from 'moment';
import 'moment-timezone';
import SettingsTagColor from '../../UserSettings/SettingsTagColor';

const { Option } = Select;
const { TextArea } = Input;

const FormAddTask = ({
  handleCancel,
  handleChangeLinks,
  onFieldsChange,
  onSelectChange,
  tag,
  darkTheme,
  onMapClicked,
  activeMarker,
  fetchPostData,
  loading,
  error,
}: any) => {
  const [isMapShown, setMapShown] = useState(false);
  const [addTagMode, setAddTagMode] = useState(false);
  const [allowFeedback, setAllowFeedback] = useState(true);
  const [tags, setTags] = useState(initialTags);
  const [isSuccess, setSuccess] = useState(false);
  const [currentTimeZone, setCurrentTimeZone] = useState('Europe/Minsk');

  const tagOptionsList = tags.map((option: string) => {
    return (
      <Option value={option} key={option}>
        {option}
      </Option>
    );
  });

  const timeZoneOptionsList = timeZoneListAdd.map((option) => {
    return (
      <Option value={option.value} key={option.name}>
        {option.name}
      </Option>
    );
  });

  const OnTimeZoneChange = (e: string) => {
    setCurrentTimeZone(e);
  };

  const showMap = () => {
    setMapShown(!isMapShown);
  };

  const toggleAddTagMode = (flag: boolean, value?: string) => {
    if (value) {
      const newTagsList = [...tags];
      newTagsList.push(value);
      setTags(newTagsList);
    }
    setAddTagMode(flag);
  };

  const onSwitchChange = (checked: boolean) => {
    setAllowFeedback(checked);
  };

  const onFinish = (values: any) => {
    values = {
      ...values,
      author: values.author ? values.author : 'admin',
      tag: tag,
      date: moment(values.date).tz(currentTimeZone).format(),
      deadline: moment(values.deadline).tz(currentTimeZone).format(),
      links: values.links ? values.links : ['https://www.google.com/'],
      photo: values.photo ? true : null,
      video: values.video ? true : null,
      map: activeMarker,
      allowFeedback: allowFeedback,
    };

    fetchPostData(values);

    if (!error) {
      setSuccess(true);
    }
  };

  if (loading) {
    return <Spin />;
  }
  if (isSuccess && !error) {
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
        <Form.Item label="Tag color">
          <SettingsTagColor />
        </Form.Item>
        <Form.Item label="Time Zone">
          <Select
            style={{ width: '30%' }}
            defaultValue={'Europe/Minsk'}
            onChange={(e) => {
              OnTimeZoneChange(e);
            }}
          >
            {timeZoneOptionsList}
          </Select>
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[{ type: 'object', required: true, message: 'Please select date!' }]}
        >
          <DatePicker style={{ width: '30%' }} format="YYYY/MM/DD" />
        </Form.Item>
        <Form.Item name="deadline" label="Deadline">
          <DatePicker format="YYYY/MM/DD" />
        </Form.Item>
        <Form.Item name="duration" rules={[{ type: 'number', min: 0 }]} label="Duration">
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
        <DynamicFieldSet handleChangeLinks={handleChangeLinks} />
        <Form.Item name="map" label="Map">
          <Button type="dashed" block onClick={showMap}>
            Show map
          </Button>
          {isMapShown && <MapComponent onMapClicked={onMapClicked} activeMarker={activeMarker} darkTheme={darkTheme} />}
        </Form.Item>
        <Form.Item name="allowFeedback" valuePropName="checked" label="Allow feedback">
          <Switch defaultChecked onChange={onSwitchChange} />
        </Form.Item>
        <Form.Item name="photo" valuePropName="fileList" getValueFromEvent={normFile} label="Photo">
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item valuePropName="fileList" getValueFromEvent={normFile} label="Video">
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

export default FormAddTask;
