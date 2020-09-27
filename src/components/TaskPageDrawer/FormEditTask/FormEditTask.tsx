import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Upload, DatePicker, Select, Spin, Alert, Switch } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import MapComponent from '../../TaskPageDrawer/Map';
import DynamicFieldSet from '../../FormAddTask/DynamicLinksField';
import { validateMessages, normFile, initialTags, timeZoneListAdd } from '../../FormAddTask/FormAddTask/utilsForForms';
import SettingsTagColor from '../../UserSettings/SettingsTagColor';

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const FormEditTask = ({
  currentItem,
  fetchEventData,
  fetchEditData,
  loading,
  error,
  data,
  loadingEdit,
  errorEdit,
  dataEdit,
  turnOffEditMode,
}: any) => {
  const [isMapShown, setMapShown] = useState(false);
  const [addTagMode, setAddTagMode] = useState(false);
  const [allowFeedback, setAllowFeedback] = useState(true);
  const [tags, setTags] = useState(initialTags);
  const [tag, setTag] = useState('self education');
  const [isSuccess, setSuccess] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [addingLink, setAddingLink] = useState(null);
  const [currentTimeZone, setCurrentTimeZone] = useState('Europe/Minsk');

  useEffect(() => {
    fetchEventData(currentItem.id);
  }, [currentItem]);

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

  const handleChangeLinks = (e) => {
    if (e.target.value) {
      if (addingLink === null) {
        const newArr = [e.target.value];
        setAddingLink(newArr);
      }
      if (addingLink) {
        const newArr = addingLink;
        newArr.push(e.target.value);
        setAddingLink(newArr);
      }
    }
  };

  const onSelectChange = (e: string) => {
    setTag(e);
  };

  const onMapClicked = (mapProps: any, map: any, event: any) => {
    const coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setActiveMarker(coords);
  };

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
      tag: values.tag ? tag : 'self education',
      date: new Date(values.date).toJSON(),
      deadline: new Date(values.deadline).toJSON(),
      links: values.links ? values.links : ['https://www.google.com/'],
      photo: values.photo ? true : null,
      video: values.video ? true : null,
      map: activeMarker,
      allowFeedback: allowFeedback,
    };
    fetchEditData(data.id, values);
    if (!error) {
      setSuccess(true);
    }
  };

  if (!data) {
    return <Spin />;
  }

  if (loading) {
    return <Spin />;
  }
  if (isSuccess && !error) {
    return <Alert message="Your task successfully added" type="success" showIcon />;
  }
  if (error) {
    return <Alert message="Something went wrong" type="error" showIcon />;
  }

  if (data) {
    const initialValues = {
      name: data.name,
      author: data.author,
      tag: data.name,
      duration: data.duration,
      description: data.description,
      result: data.result,
      remark: data.remark,
    };

    return (
      <Form
        className="form-add-wrapper "
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={initialValues}
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
          name="date"
          label="Date"
          rules={[{ type: 'object', required: true, message: 'Please select time!' }]}
        >
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
        <DynamicFieldSet handleChangeLinks={handleChangeLinks} />
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
          <Button type="default" htmlType="submit" onClick={turnOffEditMode} className="form-add-bth">
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
};

export default FormEditTask;
