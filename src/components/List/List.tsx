import React, { useEffect, useMemo, useState } from 'react';
import { fetchScheduleData } from '../../redux/actions';
import { connect } from 'react-redux';
import { List, Avatar, Spin, Tag, Alert, Pagination } from 'antd';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars';
import { LinkOutlined } from '@ant-design/icons';
import useWindowDimensions from '../../utils/useWindowDimensions';
import TaskPageDrawer from '../TaskPageDrawer';
import { Event } from './types';
import { tagsMap } from '../../utils/settingsData';

const ListView = (props: any) => {
  useEffect(() => {
    if (props.data === null) {
      props.fetchScheduleData();
    }
  }, []);

  const [renderIndex, setRenderIndex] = useState(0);
  const { width } = useWindowDimensions();

  const [drawerCurrentItem, setDrawerCurrentItem] = useState(Object);
  const [drawerIsShow, setDrawerIsShow] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleOnCloseDrawer = () => {
    setDrawerIsShow(false);
    setEditMode(false);
  };

  const shortData = useMemo(() => {
    if (props.viewData !== null) {
      return props.viewData.slice(renderIndex * 10, renderIndex * 10 + 10).map((elem: Event) => {
        const date = new Date(elem.date);
        date.setHours(date.getHours() - (3 /*Moscow time offset*/ - props.timeZone));
        return { ...elem, date: date };
      });
    } else {
      return null;
    }
  }, [renderIndex, props.viewData, props.timeZone]);

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
    const tagColor = tagsMap.get(eventItem.tag) || 'self_education';
    return (
      <List.Item key={eventItem.id} className={'list-item'}>
        <div className={'left-list-item-info'}>
          <div className="main-list-item-info">
            <h3 className={props.userPreferences.readable ? 'readable-bold-2' : ''}>{eventItem.name}</h3>
            <div className="description-of-list-item">
              <Tag
                key={eventItem.tag}
                className={props.userPreferences.readable ? 'readable-bold-1' : ''}
                style={{
                  borderColor: props.userPreferences.tagColor[tagColor],
                  color: props.userPreferences.tagColor[tagColor],
                  backgroundColor: `${props.userPreferences.tagColor[tagColor]}10`,
                }}
              >
                {eventItem.tag}
              </Tag>
              <p className={props.userPreferences.readable ? 'readable-bold-2' : ''}>
                Time: <span>{moment(eventItem.date).format('HH:mm')}</span>
              </p>
              <p>
                {eventItem.links.map((link) => {
                  return (
                    <a
                      className={props.userPreferences.readable ? 'readable-bold-2' : ''}
                      key={link}
                      href={link}
                      title={link}
                    >
                      <LinkOutlined />
                    </a>
                  );
                })}
              </p>
              <p
                className={
                  props.userPreferences.readable ? 'readable-bold-2 organizer-container' : 'organizer-container'
                }
              >
                Organizer:&nbsp;
                <a
                  className={props.userPreferences.readable ? 'readable-bold-2' : ''}
                  href={'https://github.com/' + eventItem.author}
                >
                  <Avatar src={`https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`} />
                  <span>{eventItem.author}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="more-info-container">
          <a
            className={props.userPreferences.readable ? 'readable-bold-1' : ''}
            onClick={() => {
              setDrawerCurrentItem(eventItem);
              setDrawerIsShow(true);
            }}
          >
            more
          </a>
          {props.isAdmin && (
            <a
              className={props.userPreferences.readable ? 'readable-bold-1' : ''}
              onClick={() => {
                setEditMode(true);
                setDrawerCurrentItem(eventItem);
                setDrawerIsShow(true);
              }}
            >
              edit
            </a>
          )}
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

      {props.viewData !== null && DateArray !== [] && (
        <>
          <Scrollbars className={'scrollbar-list-container'} style={{ height: 650 }}>
            <div style={{ overflowX: 'hidden' }}>
              {DateArray.map((item: Event, index: number) => {
                const thisDate = moment(item.date).format('YYYY-MM-DD');
                return (
                  <div key={index} className={'list-events-container'}>
                    <h3
                      className={
                        props.userPreferences.readable ? 'readable-bold-2 list-date-wrapper' : 'list-date-wrapper'
                      }
                    >
                      {moment(item.date).format('MMMM Do YYYY')}
                    </h3>
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
                editMode={editMode}
                currentItem={drawerCurrentItem}
              ></TaskPageDrawer>
            </div>
          </Scrollbars>

          <Pagination
            showSizeChanger={false}
            defaultPageSize={10}
            total={props.viewData.length}
            onChange={handlerPaginationChange}
            className={props.userPreferences.readable ? 'readable-bold-1 list-pagination' : 'list-pagination'}
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
    viewData: state.scheduleViewData.viewData,
    userPreferences: state.userPreferences,
  };
};

const mapDispatchToProps = {
  fetchScheduleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
