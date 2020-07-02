import React from 'react'
import classes from './sidebar.module.css'
import SidebarCard from '../sidebarCard/sidebarCard'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import SidebarCard2 from '../sidebarCard2/sidebarCard2'

class Sidebar extends React.Component {
    render() {


        return(
            <div className={classes.Sidebar}>
                <div className={classes.Dash}>
                    <span>DASHBOARD</span>
                </div>
                <SidebarCard2 />
            </div>
        )
    }
}

export default Sidebar