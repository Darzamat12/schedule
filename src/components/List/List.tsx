import React, { useEffect, useState } from 'react';
import {fetchScheduleData} from '../../redux/actions';
import { connect } from 'react-redux';
import { List, message, Avatar, Spin, Checkbox, Tag} from 'antd';
import moment from 'moment';


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
          {
            DateArray.map((item: Event, index: number) => {
              const thisDate = moment(item.date).format('YYYY-MM-DD');
              return <div key={index}>
                <p>{thisDate}</p>
                <List
                  dataSource={props.data}
                  renderItem={(eventItem: Event, index) => {
                    const eventDate = moment(eventItem.date).format('YYYY-MM-DD');
                    if (thisDate === eventDate) {
                      return <List.Item key={eventItem.name + index.toString()}>
                        <Checkbox/>
                        <List.Item.Meta
                          title={eventItem.name}
                          description={'Time: ' + moment(eventItem.date).format('HH:mm')}
                        />
                        <List.Item.Meta
                          title={<div style={{display: 'flex'}}><p>Organizer: {eventItem.author}</p><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></div>}
                          description={<Tag key={eventItem.tag}>{eventItem.tag}</Tag>}
                        />
                        <a>more</a>
                      </List.Item>
                    }
                  }}
                >
                </List>
              </div>
            })
          }
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
  };
};

const mapDispatchToProps = {
  fetchScheduleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
