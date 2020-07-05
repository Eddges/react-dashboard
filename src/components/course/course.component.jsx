import React from 'react';
import { Progress } from '../progressBar/progressBar.component';
import './course.styles.css';
import {Message} from '../course_message/message.component';

export const Course = () => {
    return(
        <div className = "parent_course_wrapper">
            <div className = "course_details_wrapper">
                <h1>Full Stack development</h1>
                <Progress/>
            </div>
            <div className = "course_current_information">
                <Message/>
            </div>
            
        </div>
    )
}