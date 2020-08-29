import React, { Component } from 'react';
import './notification.styles.css';
import renew_logo from './renew1.png';
import bell_logo from './bell.png';

export class Notification extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             reminder_list : [
                 {
                     description: 'Your subscription expires',
                     message: 'Renew now',
                     time: '6:30 PM',
                     image: {renew_logo}
                 },
                 {
                     description: '34 new unread messages',
                     message: 'View all',
                     time: '4:30 PM',
                     image: ''
                 },
                 {
                     description: 'Mike shared a file',
                     message: 'View now',
                     time: '2:34 PM',
                     image: ''
                 },
                 {
                    description: 'Mike shared a file',
                    message: 'View now',
                    time: '2:34 PM',
                    image: ''
                },
                {
                    description: 'Mike shared a file',
                    message: 'View now',
                    time: '2:34 PM',
                    image: ''
                },
                {
                    description: 'Mike shared a file',
                    message: 'View now',
                    time: '2:34 PM',
                    image: ''
                },
                {
                    description: 'Mike shared a file',
                    message: 'View now',
                    time: '2:34 PM',
                    image: ''
                }
             ]
        }
    }
    
    render() {
        return (
           <div className = "parent_notification">
              <NotificationPanelHeader header = "Reminder" logo = {bell_logo}/>
                <div className = "notification_wrapper">
                    {
                        this.state.reminder_list.map(
                            reminder => 
                                <div>
                                    <div className = "notification_child">
                                        <div className = "notification_icon_area">
                                           <img src={renew_logo} width = "50px" height = "50px" alt=""/>   
                                        </div>
                                        <div className = "notification_face_area">
                                            <span className = "notification_description">{reminder.description}</span>
                                            <span className = "notification_message">{reminder.message}</span>
                                        </div>
                                        <div className = "notification_time_area">
                                             <p className = "notification_time">{reminder.time}</p>
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export const NotificationPanelHeader = (props) => {
    return(
        <div>
              <div className = "notification_header">
                    <div className = "notification_header">
                        <p> {props.header} </p>
                    </div>
                    <div className = "notification_logo">
                        <img src={props.logo} width = "50px" height = "50px" alt=""/>
                    </div>
                </div>
        </div>
    )
}

