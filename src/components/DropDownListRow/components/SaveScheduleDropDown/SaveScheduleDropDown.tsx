import { Dropdown, Menu, message, Modal, Button, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import React from 'react';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const CheckboxGroup = Checkbox.Group;
const saveAsDropList = ['pdf', 'txt', 'docx'];

const SaveScheduleDropDown: React.FC = () => {
  const [isShowModal, setShowModal] = useState(false);
  const [checkedList, setCheckedList] = useState<any[]>([]);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    setCheckAll(checkedList.length === saveAsDropList.length);
  }, [checkedList]);

  const DownloadSchedule = (formats: string[]) => {
    setShowModal(false);
    setCheckedList([]);
    formats.forEach((formatDownload: string) => {
      message.loading('Download schedule as ' + formatDownload);
      // function to download schedule
    });
  };

  const handleMenuSaveAsClick = (elem: any) => {
    DownloadSchedule([elem.key]);
  };

  const onCheckAllChange = (event: CheckboxChangeEvent) => {
    setCheckedList(event.target.checked ? saveAsDropList : []);
    setCheckAll(event.target.checked);
  };

  const checkGroupOnChange = (checkedValue: CheckboxValueType[]) => {
    setCheckedList(checkedValue);
  };

  return (
    <>
      <Dropdown.Button
        style={{ margin: '0 10px 10px 0' }}
        onClick={() => {
          setShowModal(true);
        }}
        overlay={
          <Menu onClick={handleMenuSaveAsClick}>
            {saveAsDropList.map((item, i) => {
              return (
                <Menu.Item key={item} icon={<DownloadOutlined />}>
                  {item}
                </Menu.Item>
              );
            })}
          </Menu>
        }
        trigger={['click']}
      >
        Save as
      </Dropdown.Button>

      <Modal
        title="Save schedule as"
        visible={isShowModal}
        onOk={() => {
          setShowModal(false);
        }}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </Button>,
          <Button
            icon={<DownloadOutlined />}
            key="submit"
            type="primary"
            onClick={() => {
              DownloadSchedule(checkedList);
            }}
          >
            Download
          </Button>,
        ]}
      >
        <div className="site-checkbox-all-wrapper">
          <Checkbox onChange={onCheckAllChange} checked={checkAll}>
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={saveAsDropList} value={checkedList} onChange={checkGroupOnChange} />
      </Modal>
    </>
  );
};

export default SaveScheduleDropDown;
