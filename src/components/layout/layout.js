import React from 'react'
import classes from './layout.module.css'
import Navbar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Navbar />
            <Sidebar />
            {props.children}
        </div>
    )
}

export default Layout