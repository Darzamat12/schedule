import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button, Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setVisibleColumns } from '../../redux/reducers/hideColumnReducer/actions';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const HideColumnDropdown = (props: any) => {
  const [checkedColumns, setCheckedColumns] = useState([]);

  const onChange = (e: CheckboxChangeEvent) => {
    let checkedColumnsArray: any = checkedColumns;
    let filteredColumns = props.initialColumns;

    if (e.target.checked) {
      checkedColumnsArray = checkedColumnsArray.filter((id: string) => {
        return id !== e.target.id;
      });
    } else {
      checkedColumnsArray.push(e.target.id);
    }

    checkedColumnsArray.forEach((column: string) => {
      filteredColumns = filteredColumns.filter((elem: any) => elem.title.toLowerCase() !== column);
    });

    setCheckedColumns(checkedColumnsArray);
    props.setVisibleColumns(filteredColumns);
  };

  useEffect(() => {
    setCheckedColumns([]);
  }, [props.disabled]);

  const isChecked = (id: string) => !checkedColumns.some((colId: string) => colId === id);

  const menu = (
    <Menu>
      <Menu.ItemGroup title="Columns" className={props.userPreferences.readable ? 'readable-bold-2' : ''}>
        <Menu.Item key="1">
          <Checkbox
            className={props.userPreferences.readable ? 'readable-bold-1' : ''}
            id="time"
            onChange={onChange}
            checked={isChecked('time')}
          >
            Time
          </Checkbox>
        </Menu.Item>
        <Menu.Item key="2">
          <Checkbox
            className={props.userPreferences.readable ? 'readable-bold-1' : ''}
            id="link"
            onChange={onChange}
            checked={isChecked('link')}
          >
            Link
          </Checkbox>
        </Menu.Item>
        <Menu.Item key="3">
          <Checkbox
            className={props.userPreferences.readable ? 'readable-bold-1' : ''}
            id="duration"
            onChange={onChange}
            checked={isChecked('duration')}
          >
            Duration
          </Checkbox>
        </Menu.Item>
        <Menu.Item key="4">
          <Checkbox
            className={props.userPreferences.readable ? 'readable-bold-1' : ''}
            id="type"
            onChange={onChange}
            checked={isChecked('type')}
          >
            Type
          </Checkbox>
        </Menu.Item>
        <Menu.Item key="5">
          <Checkbox
            className={props.userPreferences.readable ? 'readable-bold-1' : ''}
            id="author"
            onChange={onChange}
            checked={isChecked('author')}
          >
            Author
          </Checkbox>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <>
      <Dropdown
        className={props.userPreferences.readable ? 'readable-bold-2' : ''}
        disabled={props.disabled}
        overlay={menu}
        trigger={['click']}
      >
        <Button
          style={{ margin: '0px 10px 10px 0px' }}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Columns <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    columnTitles: state.hideColumnData.columnArray,
    initialColumns: state.initColumnsData.initialColumns,
    adminMode: state.userMode.isAdmin,
    userPreferences: state.userPreferences,
  };
};

const mapDispatchToProps = {
  setVisibleColumns,
};

export default connect(mapStateToProps, mapDispatchToProps)(HideColumnDropdown);
