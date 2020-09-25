import { Form, Input, InputNumber, DatePicker, TimePicker, Select } from 'antd';
const { Option } = Select;
import React from 'react';
import { EditableCellProps } from './types';
import { filters } from '../../utils/filters';

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    dataIndex === 'datePicker' ? (
      <DatePicker style={{ minWidth: 60 }} />
    ) : dataIndex === 'timePicker' ? (
      <TimePicker style={{ minWidth: 60 }} format={'HH:mm'} minuteStep={5} />
    ) : dataIndex === 'duration' ? (
      <InputNumber style={{ minWidth: 60 }} />
    ) : dataIndex === 'tag' ? (
      <Select>
        {filters.tag.map((tag) => {
          return (
            <Option key={tag.value} value={tag.value}>
              {tag.value}
            </Option>
          );
        })}
      </Select>
    ) : (
      <Input style={{ minWidth: 60 }} />
    );

  const config: any =
    dataIndex === 'datePicker' || dataIndex === 'timePicker'
      ? { type: 'object', required: true }
      : dataIndex === 'duration'
      ? { type: 'number', required: false }
      : dataIndex === 'links'
      ? { type: 'string', required: false, message: `Input links separated by commas` }
      : { type: 'string', required: true };

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item name={dataIndex} rules={[config]} style={{ margin: 0 }}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
