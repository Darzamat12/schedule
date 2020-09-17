import React, { useEffect, useState } from 'react';
import {fetchScheduleData} from '../../redux/actions';
import { connect } from 'react-redux';
import { List, message, Avatar, Spin, Checkbox, Tag} from 'antd';
import moment from 'moment';
import './List.less';
import { Scrollbars } from 'react-custom-scrollbars';
import { LinkOutlined } from '@ant-design/icons';


interface Event {
  id: number;
  name: string;
  author: string;
  tag: string;
  date: string;
  deadline: string;
  duration: number;
  description: string;
  result: string;
  remark: string;
  links: Array<string>;
  photo: null;
  video: string;
  map: string;
  rating: number;
  feedback: string;
}


const ListView = (props: any /*plug*/) => {
  useEffect(() => {
    if (props.data === null) {
      props.fetchScheduleData(); //function to start fetch data
    }
  }, []);


  let DateArray = [];
  if (props.data !== null) {
    DateArray = props.data.filter((item: Event, index: number, arr: Event[]) => {
      const thisDate = moment(item.date).format('YYYY-MM-DD');
      const prevDate = ((index - 1) >= 0) ? moment(arr[index - 1].date).format('YYYY-MM-DD') : null;
      return prevDate !== thisDate;
  });}



  return (
    <>
      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error, try again</p>}
      {props.data !== null && DateArray !== [] &&
        <>
          <Scrollbars className={'scrollbar-list-container'} style={{height: 700 }}>
          <div style={{overflowX: 'hidden'}}>
          {
            DateArray.map((item: Event, index: number) => {
              const thisDate = moment(item.date).format('YYYY-MM-DD');
              return <div key={index} className={'list-events-container'}>
                <p className={'list-date-wrapper'}>{moment(item.date).format('MMMM Do YYYY')}</p>
                <List
                  dataSource={props.data}
                  renderItem={(eventItem: Event, index) => {
                    if (thisDate === moment(eventItem.date).format('YYYY-MM-DD')) {
                      return <List.Item key={eventItem.name + index.toString()} className={'list-item'}>
                          <div className={'left-list-item-info'}>
                            <Checkbox/>
                            <div className='main-list-item-info'>
                              <h3>{eventItem.name}</h3>
                              <p style={{marginBottom: 0,}}>{eventItem.result}</p>
                              <div className='description-of-list-item'>
                                <Tag key={eventItem.tag}>{eventItem.tag}</Tag>
                                <p>{'Time: ' + moment(eventItem.date).format('HH:mm')}</p>
                                <p>{eventItem.links.map((link) => {
                                  return (
                                  <a key={link} href={link} title={link}>
                                    <LinkOutlined />
                                  </a>
                                )})}</p>
                                <div className='organizer-container'>
                                  <p>Organizer: {eventItem.author}</p>
                                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='more-info-container'>
                            <a>more</a>
                          </div>
                      </List.Item>
                    }
                  }}
                >
                </List>
              </div>
            })
          }
          </div></Scrollbars>
        </>
      }
  </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.scheduleData.loading,
    error: state.scheduleData.error,
    data: state.scheduleData.data,
    //isAdmin: state.userModeData.userMode,
  };
};

const mapDispatchToProps = {
  fetchScheduleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
