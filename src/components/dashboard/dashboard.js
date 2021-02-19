import React from 'react'
import classes from './dashboard.module.css'
import Layout from '../layout/layout'
import {Route, Switch, NavLink} from 'react-router-dom'
import Schedule from '../schedule/schedule'
import Announcements from '../announcements/announcements'
import Dash from '../dash/dash'
import LoginForm from '../loginForm/loginForm'
import SignUpForm from '../signUpForm/signUpForm'
import Auth from '../auth'

class Dashboard extends React.Component{
    render() {
        return(
            <div className={classes.Dashboard}>
                <Route  path="/" exact component={Auth} />
                <Route  path="/:any" exact component={Layout} />

                {/* {
                    !window.location.pathname &&                 
                    <Layout>

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
                    </Layout>
                } */}
                

            </div>
        )
    }
}

export default Dashboard