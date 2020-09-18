import React, { useEffect, useMemo, useState } from 'react';
import { fetchScheduleData } from '../../redux/actions';
import { connect } from 'react-redux';
import { List, Avatar, Spin, Checkbox, Tag, Alert, Pagination } from 'antd';
import moment from 'moment';
import './List.less';
import { Scrollbars } from 'react-custom-scrollbars';
import { LinkOutlined } from '@ant-design/icons';
import useWindowDimensions from '../../utils/useWindowDimensions';
import TaskPageDrawer from '../TaskPageDrawer';
import { Event } from './types';

const ListView = (props: any /*plug*/) => {
  useEffect(() => {
    if (props.data === null) {
      props.fetchScheduleData(); //function to start fetch data
    }
  }, []);

  const [renderIndex, setRenderIndex] = useState(0);
  const { width } = useWindowDimensions();

  const [drawerCurrentItem, setDrawerCurrentItem] = useState(Object);
  const [drawerIsShow, setDrawerIsShow] = useState(false);
  const handleOnCloseDrawer = () => {
    setDrawerIsShow(false);
  };

  const shortData = useMemo(() => {
    if (props.data !== null) {
      return props.data.slice(renderIndex * 11, renderIndex * 11 + 11).map((elem: Event) => {
        const date = new Date(elem.date);
        date.setHours(date.getHours() - (3 /*Moscow time offset*/ - props.timeZone));
        return { ...elem, date: date };
      });
    } else {
      return null;
    }
  }, [renderIndex, props.data, props.timeZone]);

  const DateArray = useMemo(() => {
    if (shortData != null) {
      return shortData.filter((item: Event, index: number, arr: Event[]) => {
        const thisDate = moment(item.date).format('YYYY-MM-DD');
        const prevDate = index - 1 >= 0 ? moment(arr[index - 1].date).format('YYYY-MM-DD') : null;
        return prevDate !== thisDate;
      });
    } else {
      return [];
    }
  }, [shortData]);

  const handlerPaginationChange = (current: number) => {
    setRenderIndex(current - 1);
  };

  const renderEventItem = (eventItem: Event) => {
    return (
      <List.Item key={eventItem.id} className={'list-item'}>
        <div className={'left-list-item-info'}>
          <Checkbox />
          <div className="main-list-item-info">
            <h3>{eventItem.name}</h3>
            <div className="description-of-list-item">
              <Tag key={eventItem.tag}>{eventItem.tag}</Tag>
              <p>{'Time: ' + moment(eventItem.date).format('HH:mm')}</p>
              <p>
                {eventItem.links.map((link) => {
                  return (
                    <a key={link} href={link} title={link}>
                      <LinkOutlined />
                    </a>
                  );
                })}
              </p>
              <div className="organizer-container">
                <p>Organizer: {eventItem.author}</p>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="more-info-container">
          <a
            onClick={() => {
              setDrawerCurrentItem(eventItem);
              setDrawerIsShow(true);
            }}
          >
            more
          </a>
          {props.isAdmin && <a>edit</a>}
        </div>
      </List.Item>
    );
  };

  return (
    <div className="list-wrapper">
      {props.loading && (
        <div className={'list-spin'}>
          <Spin size={'large'} />
        </div>
      )}

      {props.error && <Alert message="Error" description="Error while loading data." type="error" showIcon />}

      {props.data !== null && DateArray !== [] && (
        <>
          <Scrollbars className={'scrollbar-list-container'} style={{ height: 650 }}>
            <div style={{ overflowX: 'hidden' }}>
              {DateArray.map((item: Event, index: number) => {
                const thisDate = moment(item.date).format('YYYY-MM-DD');
                return (
                  <div key={index} className={'list-events-container'}>
                    <p className={'list-date-wrapper'}>{moment(item.date).format('MMMM Do YYYY')}</p>
                    <List
                      dataSource={shortData}
                      renderItem={(eventItem: Event) => {
                        if (thisDate === moment(eventItem.date).format('YYYY-MM-DD')) {
                          return renderEventItem(eventItem);
                        }
                      }}
                    ></List>
                  </div>
                );
              })}
              <TaskPageDrawer
                isShown={drawerIsShow}
                handleOnClose={handleOnCloseDrawer}
                currentItem={drawerCurrentItem}
              ></TaskPageDrawer>
            </div>
          </Scrollbars>

          <Pagination
            showSizeChanger={false}
            defaultPageSize={11}
            total={props.data.length}
            onChange={handlerPaginationChange}
            className={'list-pagination'}
            size={width <= 500 ? 'small' : 'default'}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.scheduleData.loading,
    error: state.scheduleData.error,
    data: state.scheduleData.data,
    isAdmin: state.userMode.isAdmin,
    timeZone: state.timeZoneData.timeOffset,
    week: state.weekPickerData.week,
  };
};

const mapDispatchToProps = {
  fetchScheduleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
