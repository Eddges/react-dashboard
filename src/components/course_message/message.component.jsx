import React, { Component } from 'react';
import './message.styles.css';
import renew_logo from './renew1.png';
import bell_logo from './bell.png';
import {NotificationPanelHeader} from '../notification/notification.component';
import {Button} from '../button/button.component';

export class Message extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             reminder_list : [
                 {
                     description: 'Pass coding quiz',
                     date: '5 July 2020',
                     time: '6:30 PM',
                     
                 },
                 {
                     description: 'Enrollment deadline',
                     date: '5 July 2020',
                     time: '4:30 PM',
                   
                 },
                 {
                     description: 'Course Starting date',
                     date: '5 July 2020',
                     time: '2:34 PM',
                    
                 },
                 
             ]
        }
    }
    
    render() {
        return (
           <div className = "parent_message">
              <NotificationPanelHeader header = "IMPORTANT DATES" logo = {bell_logo}/>
                <div className = "message_wrapper">
                    {
                        this.state.reminder_list.map(
                            reminder => 
                                <div>
                                    <div className = "message_child">
                                        <div className = "message_icon_area">
                                           <img src={renew_logo} width = "50px" height = "50px" alt=""/>   
                                        </div>
                                        <div className = "message_face_area">
                                            <span className = "message_description">{reminder.description}</span>
                                            <span className = "message_message">{reminder.date}</span>
                                        </div>
                                        <div className = "message_time_area">
                                             <p className = "message_time">{reminder.time}</p>
                                        </div>
                                    </div>
                                   
                                   
                                </div>

                        )
                    }
                    <div className = "Button_area_message">
                        <Button/>
                    </div>
                     
                </div>
               
            </div>
        )
    }
}



