import React from 'react'
import classes from './schedule.module.css'
import './calendar.css'
import "antd/dist/antd.css";
import {Statistic, Row, Col, Button, Calendar, Badge} from 'antd'
import moment from 'moment'


function getListData(value) {
    let listData;
    

    // console.log(value.date())
    // if(value.date() === 3) {
    //     listData = [{
    //         type : 'warning', content : 'Linked List'
    //     }]
    // }
    var month = new Date().getMonth() + 1;
    // console.log(month)
    console.log(value.year())
    if(value.month()>=month-1 && value.month()<month)  {
        // if(value.date()===7){
        //     listData = [ {
        //         type : 'warning', content : 'Linked List'
        //     }]
        // }
        switch (value.date()) {
            case 8:
              listData = [
                { type: 'warning', content: 'L-9 Linked List' },
                { type: 'success', content: 'Hackathon prep' },
              ];
              break;
            case 10:
              listData = [
                { type: 'warning', content: 'L-10 Binary Trees' },
              //   { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'Hackathon 2 Deadline' },
              ];
              break;
            case 15:
              listData = [
                { type: 'warning', content: 'L-11 Tree Traversal' },
                { type: 'success', content: 'Tech Talk' },
              ];
              break;
            default:
          }
    }

    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    // console.log(listData)
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  function getMonthData(value) {
    // if (value.month() === 7) {
    //     console.log('is 7')
    //   return 1;
    // }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }


class Schedule extends React.Component{
    render() {
        const headerRender = () => null;
        const date = new Date();
        return(
            <div className={classes.Schedule}>
                {/* <Row gutter={16}>
                    <Col span={4}>
                    <Statistic title="Active Users" value={112893} />
                    </Col>
                    <Col span={4}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                    <Button style={{ marginTop: 16 }} type="primary">
                        Recharge
                    </Button>
                    </Col>
                </Row> */}
                {/* <Moment add={{ hours: 12 }}>{date}</Moment> */}
                <Calendar headerRender={null} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
            </div>
        )
    }
}

export default Schedule