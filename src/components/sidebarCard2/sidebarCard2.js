import React from 'react'
import './sidebarCard2.css'
import {Route, NavLink, Link, Switch, withRouter} from 'react-router-dom'
import classes from './sidebarCard2.module.css'


class SidebarCard2 extends React.Component {
    render() {
        return(
            <div className={classes.SidebarCard2}>
                {/* <span>
                    Select
                </span> */}
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/schedule">Schedule</NavLink></li>

                    <li><NavLink to="/announcements">Announcements</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/achievements">Achievements</NavLink></li>
                    <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
                    <li><NavLink to="/challenges">Challenges</NavLink></li>
                    <li><NavLink to="/resources">Resources</NavLink></li>
                </ul>
                {/* <NavLink to="item1">Schedule</NavLink> */}
            </div>
        )
    }
}

export default SidebarCard2