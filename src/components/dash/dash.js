import React from 'react'
import classes from './dash.module.css'
import Schedule from '../schedule/schedule';
import Announcements from '../announcements/announcements';
import { Profile } from '../profile/profile.component';
import { Course } from '../course/course.component';
import {Resource} from '../Resources/resource.component';

class Dash extends React.Component {
    render() {

        let curr=null;
        if(this.props.current==='schedule'){
            curr=<Schedule />
        }
        else if(this.props.current==='announcements'){
            curr=<Announcements />
        }
        else if(this.props.current==='profile'){
            curr=<Profile />
        }
        else if(this.props.current==='challenges'){
            curr=<Course />
        }
        else if(this.props.current==='resources'){
            curr=<Resource />
        }
        return(
            <div className={classes.Dash}>
                {curr}
            </div>
        )
    }
}

export default Dash