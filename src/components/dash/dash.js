import React from 'react'
import classes from './dash.module.css'
import Schedule from '../schedule/schedule';
import Announcements from '../announcements/announcements';
import Home from '../home/home';

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
        return(
            <div className={classes.Dash}>
                {curr}
            </div>
        )
    }
}

export default Dash