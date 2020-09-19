import React, { useState } from 'react';
import { Menu, Dropdown, Button, Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect} from 'react-redux';
import { setVisibleColumns } from '../../redux/reducers/hideColumnReducer/actions';

const HideColumnDropdown = (props: any) => {
  const [checkedColumns, setCheckedColumns] = useState([]);

  const onChange = (e) => {
    let checkedColumnsArray: any = checkedColumns;
    let filteredColumns: any = props.adminMode ? props.initialColumns : props.initialColumns.filter((el, index) => index !== 6);

    if(e.target.checked){
      console.log('here');
      checkedColumnsArray = checkedColumnsArray.filter(id => {return id !== e.target.id});
      console.log(checkedColumnsArray);
    }
    else if(!e.target.checked){
      console.log('here1');
      checkedColumnsArray.push(e.target.id);
      console.log(checkedColumnsArray);
    }

    checkedColumnsArray.forEach((column: object) => {
      filteredColumns = filteredColumns.filter((elem) => elem.title.toLowerCase() !== column);
    });

    setCheckedColumns(checkedColumnsArray);
    props.setVisibleColumns(filteredColumns);

  };

  const menu = (
    <Menu>
      <Menu.ItemGroup title="Columns" >
        <Menu.Item  key="1"><Checkbox id="time" onChange={onChange} defaultChecked>Time</Checkbox></Menu.Item>
        <Menu.Item key="2"><Checkbox id="link" onChange={onChange} defaultChecked>Link</Checkbox></Menu.Item>
        <Menu.Item  key="3"><Checkbox id="duration" onChange={onChange} defaultChecked>Duration</Checkbox></Menu.Item>
        <Menu.Item key="4"><Checkbox id="type" onChange={onChange} defaultChecked>Type</Checkbox></Menu.Item>
        <Menu.Item  key="5"><Checkbox id="author" onChange={onChange} defaultChecked>Author</Checkbox></Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={['click']}>
        <Button onClick={(e) => {e.preventDefault()
        }}>
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
  };
};

const mapDispatchToProps = {
  setVisibleColumns,
};

export default connect(mapStateToProps, mapDispatchToProps)(HideColumnDropdown);
