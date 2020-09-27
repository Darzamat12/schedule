import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const SelectComponent: React.FC<{
  initialValue: number;
  optionData: { name: string; value: number }[];
  changeFunction: Function;
}> = (props) => {
  function handleChange(optionIndex: number) {
    props.changeFunction(props.optionData[optionIndex].value);
  }

  return (
    <>
      <Select defaultValue={props.initialValue} style={{ width: 200, margin: '0 10px 10px 0' }} onChange={handleChange} disabled={false}>
        {props.optionData.map((item, i) => {
          return (
            <Option key={item.name} value={i}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

export default SelectComponent;
