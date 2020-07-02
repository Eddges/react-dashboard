import React from 'react'
import classes from './sidebarCard.module.css'
import './sidebarCard.css'
import {Route, NavLink, Link, Switch, withRouter} from 'react-router-dom'


class SidebarCard extends React.Component {
    render() {
        return(
            <div className={classes.SidebarCard}>
                <span>Hello</span>
                <ul className={classes.ul}>
                    <li><NavLink to="/item1" >Schedule</NavLink></li>
                    <li><NavLink to="/item2" >Announcements</NavLink></li>
                    {/* <li><a href="/item1">Hello</a></li> */}
                    {/* <li><a href="/item1">Schedule</a></li> */}
                </ul>
            </div>
        )
    }
}

export default SidebarCard