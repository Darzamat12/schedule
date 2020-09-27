import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
const { Option } = Select;

const SelectComponent: React.FC<{
  initialValue: number;
  optionData: { name: string; value: number }[];
  changeFunction: Function;
  userPreferences: any;
}> = (props) => {
  function handleChange(optionIndex: number) {
    props.changeFunction(props.optionData[optionIndex].value);
  }

  return (
    <>
      <Select
        className={props.userPreferences.readable ? 'readable-bold-2' : ''}
        defaultValue={props.initialValue}
        style={{ width: 200, margin: '0 10px 10px 0' }}
        onChange={handleChange}
        disabled={false}
      >
        {props.optionData.map((item, i) => {
          return (
            <Option className={props.userPreferences.readable ? 'readable-bold-2' : ''} key={item.name} value={i}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userPreferences: state.userPreferences,
  };
};

export default connect(mapStateToProps, null)(SelectComponent);
