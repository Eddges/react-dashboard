import React from 'react'
import classes from './dash.module.css'
import Schedule from '../schedule/schedule';
import Announcements from '../announcements/announcements';

import Home from '../home/home';

import { Profile } from '../profile/profile.component';
import { Course } from '../course/course.component';


class Dash extends React.Component {
    render() {

        let curr=null;
        if(this.props.current==='schedule'){
            curr=<Schedule />
        }
        else if(this.props.current==='announcements'){
            curr=<Announcements />
        }
        else if(this.props.current==='overview') {
            curr=<Home />
        }
        else if(this.props.current==='profile'){
            curr=<Profile />
        }
        else if(this.props.current==='challenges'){
            curr=<Course />

        }
        return(
            <div className={classes.Dash}>
                {curr}
            </div>
        )
    }
}

export default Dash