import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Table, Form, Button } from 'antd';
import TaskPageDrawer from '../TaskPageDrawer';
import EditableCell from './EditableCell';
import { Event } from './types';
import { getColumns } from './columnsFunc';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { DoubleRightOutlined } from '@ant-design/icons';
import HideColumnsDropdown from '../HideColumnsDropdown/HideColumnsDropdown';

const FilterTable = (props: any) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(props.data);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record: Event) => record.id.toString() === editingKey;

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<Event>(Object);
  const [columnsList, setColumnsList] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    props.fetchScheduleData(); //function to start fetch data
  }, []);

  const edit = (record: Event) => {
    form.setFieldsValue({
      datePicker: moment(record.date),
      timePicker: moment(record.date),
      ...record,
      links: record.links.join(',  '),
    });
    setEditingKey(record.id.toString());
  };

  const cancel = () => {
    setEditingKey('');
  };

  const handleDelete = (id: string) => {
    props.fetchDeleteData(id);
    const filterData = data.filter((event: Event) => event.id.toString() !== id);
    setData(filterData);
    props.reqScheduleDataSuccess(filterData);
  };

  const save = async (key: React.Key) => {
    const row = await form.validateFields();
    const date = row.datePicker
      .set({
        hour: row.timePicker.get('hour'),
        minute: row.timePicker.get('minute'),
        second: row.timePicker.get('second'),
      })._d.toISOString();
    row.date = date;
    row.links = row.links.split(',');
    delete row.datePicker;
    delete row.timePicker;

    const newData = [...data];
    const index = newData.findIndex((item) => key === item.id.toString());
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      setData(newData);
      props.reqScheduleDataSuccess(newData);
      props.fetchEditData(newData[index].id, { ...item, ...row });
      setEditingKey('');
    } else {
      setData(newData);
      setEditingKey('');
    }
  };

  useEffect(() => {
    const columns = [
      ...getColumns(isEditing, save, cancel, edit, editingKey, handleDelete),
      {
        title: 'More',
        key: 'operation',
        fixed: 'right',
        width: 'fit-content',
        render: (_: any, record: Event) => (
          <Button
            style={{ border: 'none' }}
            icon={<DoubleRightOutlined />}
            onClick={() => {
              setShowModal(true);
              setCurrentItem(record);
            }}
          ></Button>
        ),
      },
    ];

    const mergedColumns = columns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Event) => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });

    props.setVisibleColumns(mergedColumns);
    props.setInitialColumns(mergedColumns);
  }, [editingKey]);

  useEffect(() => {
    setColumnsList(props.columnTitles);
  }, [props.columnTitles]);

  useEffect(() => {
    if (props.data !== null) {
<<<<<<< HEAD
      // const pageIndex = choosingPage(props.data);
      // setPage(pageIndex);
      return props.data.map((elem: Event) => {
        const date = new Date(elem.date);
        date.setHours(date.getHours() - (3 /*Moscow time offset*/ - props.timeZone));
        return { ...elem, date: date };
      });
=======
      setData(
        props.data.map((elem: Event) => {
          const date = new Date(elem.date);
          date.setHours(date.getHours() - (3 /*Moscow time offset*/ - props.timeZone));
          return { ...elem, date: date };
        }),
      );
>>>>>>> 988144414215ef5a48e9491a38c42734fc68262b
    } else {
      setData(props.data);
    }
  }, [props.timeZone, props.data]);

  return (
    <>
      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error, try again</p>}
      {props.data !== null && (
<<<<<<< HEAD
          <Table<Event>
            columns={props.adminMode ? columnsList : columnsList.filter((el, index) => index !== 6)}
            dataSource={currentData}
            onRow={(record, index) => {
              return {
                onClick: (event) => {
                  setShowModal(true);
                  setCurrentItem(record);
                },
              };
            }}
          />
        )}
        <TaskPageDrawer isShown={showModal} handleOnClose={() => setShowModal(false)} currentItem={currentItem} />
=======
        <>
          <HideColumnsDropdown disabled={editingKey !== ''} />
          <Form form={form} component={false}>
            <Table<Event>
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
                size: width <= 500 ? 'small' : 'default',
              }}
              bordered={true}
              columns={
                props.adminMode
                  ? columnsList
                  : columnsList.filter((el: any, index: number) => index !== columnsList.length - 2)
              }
              dataSource={data}
              onRow={(record) => {
                return {
                  onDoubleClick: () => {
                    if (editingKey! == '' && props.adminMode) edit(record);
                  },
                };
              }}
              scroll={{ x: 'max-content' }}
              size={width <= 500 ? 'small' : width <= 800 ? 'middle' : 'large'}
            />
          </Form>
        </>
      )}
      <TaskPageDrawer isShown={showModal} handleOnClose={() => setShowModal(false)} currentItem={currentItem} />
>>>>>>> 988144414215ef5a48e9491a38c42734fc68262b
    </>
  );
};

export default FilterTable;
