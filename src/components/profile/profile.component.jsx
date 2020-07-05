import React, { Component } from 'react';
import './profile.styles.css';
import logo from './096.png';
import { Notification } from '../notification/notification.component';

export class Profile extends Component {
    render() {
        return (
            <div>
                
                <div className = "profile_wrapper">
                    <div className = "greeting_wrapper">
                        <div className = "greeting_left">
                            <p className = "greeting_left_heading">
                                Welcome Back, Nagendra
                            </p>
                            <p className = "greeting_left_description">
                                You have learned 60% of your weekly goal. keep up the hard work to improve your skills.
                            </p>
                        </div>
                        <div className = "greeting_right">
                            <img src={logo} width = "260px" height = "200px" alt=""/>
                        </div>
                    </div>
                    <Notification/>
                </div>
           
            </div>
        )
    }
}

