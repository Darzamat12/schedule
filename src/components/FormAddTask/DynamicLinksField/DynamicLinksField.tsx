import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './DynamicLinksField.less';

const DynamicFieldSet: React.FC = ({ handleChangeLinks }) => {
  return (
    <>
      <Form.List name="links">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field) => (
                <Form.Item label="Link">
                  <Form.Item
                    key={field.key}
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        whitespace: true,
                        required: true,
                        message: 'Please input link or delete this field.',
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      onChange={(e) => {
                        handleChangeLinks(e);
                      }}
                    />
                  </Form.Item>
                  {fields.length >= 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ margin: '0 8px' }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item label="Add link">
                <Button
                  type="dashed"
                  block
                  onClick={() => {
                    add();
                  }}
                >
                  <PlusOutlined /> Add link
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </>
  );
};
export default DynamicFieldSet;
