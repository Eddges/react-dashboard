import React from 'react'
import classes from './layout.module.css'
import Navbar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'
import {Route, Switch, NavLink} from 'react-router-dom'

import Schedule from '../schedule/schedule'
import Announcements from '../announcements/announcements'
import Dash from '../dash/dash'
import LoginForm from '../loginForm/loginForm'
import SignUpForm from '../signUpForm/signUpForm'

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Navbar />
            <Sidebar />

            <Switch>
                            
                <Route  path="/home"  render={() => <Dash current="overview" />} />
                <Route path="/schedule"  render={() => <Dash current="schedule" />} /> 
                <Route path="/announcements"  render={() => <Dash current='announcements' />} />
                <Route path="/profile"  render={() => <Dash current='profile' />} />
                <Route path="/achievements"  render={() => <Dash current='achievements' />} />
                <Route path="/leaderboard"  render={() => <Dash current='leaderboard' />} />
                <Route path="/challenges"  render={() => <Dash current='challenges' />} />
                <Route path="/resources"  render={() => <Dash current='resources' />} />
                
            </Switch>
            {/* {props.children} */}
        </div>
    )
}

export default Layout