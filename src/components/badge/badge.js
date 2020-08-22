import React from 'react'
import classes from './badge.module.css'
import badgeIcon from '../../assets/badge.svg'

const Badge = (props) => {
    return(
        <div className={classes.Badge}>
            <div className={classes.Top}>
                <div className={classes.Icon}>
                    <img src={badgeIcon} alt="Badge Icon" />
                </div>
                <span className={classes.TopText}>Badge</span>
            </div>
            {/* <div className={classes.DivLine}></div> */}
            <div className={classes.Grade}>
                <span>{props.grade}</span>
            </div>
            {/* <div className={classes.DivLine}></div> */}
            <div className={classes.Bottom}>
                <span>Grade Score</span>
            </div>
        </div>
    )
}

export default Badge