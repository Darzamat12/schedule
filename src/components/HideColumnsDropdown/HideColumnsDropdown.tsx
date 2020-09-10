import React from 'react';
import { Menu, Dropdown, Button, Checkbox} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect, useDispatch } from 'react-redux';
import { setVisibleColumnTitles } from '../../redux/actions';
import "antd/dist/antd.css";


const HideColumnDropdown = () => {
    const dispatch = useDispatch();

    const columns = localStorage.getItem('columns');
    let columnOptions: any;
    console.log(columns);


    function onChange(checkedValues: any) {
        let visibleColumn: any;
        if(columns !== null){
            console.log(Array.from(JSON.parse(columns)));
            visibleColumn = Array.from(JSON.parse(columns)).filter((value: any) => {
                if(checkedValues.includes(value.title)) return value;
            });
        }

        dispatch(setVisibleColumnTitles(visibleColumn));
        localStorage.setItem('currentColumns', JSON.stringify(visibleColumn));
        console.log("checked = ", checkedValues);
    }

    if(columns !== null){
        const allColumnOptions = Array.from(JSON.parse(columns)).map((column: any) => column.title);
        columnOptions = allColumnOptions.filter((column) => column !== undefined);
    }

    const columnList = (
        <Menu>
            <Menu.Item key="0">
            <Checkbox.Group
                style={{ display: "flex", flexDirection: "column", padding: "0 5px" }}
                options={columnOptions}
                defaultValue={columnOptions}
                onChange={onChange}
            />
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Dropdown overlay={columnList} trigger={["click"]}>
                <Button onClick={(e) => e.preventDefault()}>
                Click me <DownOutlined />
                </Button>
            </Dropdown>
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        columnTitles: state.hideColumnData.columnArray,
    };
};

const mapDispatchToProps = {
    setVisibleColumnTitles,
}

export default connect(mapStateToProps, mapDispatchToProps)(HideColumnDropdown);
