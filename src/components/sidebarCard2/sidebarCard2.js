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
                    <li><NavLink to="/home"><ion-icon name="home"></ion-icon>Home</NavLink></li>
                    <li><NavLink to="/schedule"><ion-icon name="calendar"></ion-icon>Schedule</NavLink></li>

                    <li><NavLink to="/announcements"><ion-icon name="megaphone"></ion-icon>Announcements</NavLink></li>
                    <li><NavLink to="/profile"><ion-icon name="person"></ion-icon>Profile</NavLink></li>
                    <li><NavLink to="/achievements"><ion-icon name="ribbon"></ion-icon>Achievements</NavLink></li>
                    <li><NavLink to="/leaderboard"><ion-icon name="rocket"></ion-icon>Leaderboard</NavLink></li>
                    <li><NavLink to="/challenges"><ion-icon name="star"></ion-icon>Challenges</NavLink></li>
                    <li><NavLink to="/resources"><ion-icon name="trail-sign"></ion-icon>Resources</NavLink></li>
                </ul>
                {/* <NavLink to="item1">Schedule</NavLink> */}
            </div>
        )
    }
}

export default SidebarCard2