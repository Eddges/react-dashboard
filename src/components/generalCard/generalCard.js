import React from 'react'
import classes from './generalCard.module.css'

const GeneralCard = (props) => {
    return(
        <div className={classes.Badge}>
            <div className={classes.Top}>
                <div className={classes.Icon}>
                    <img src={props.icon} alt="Badge Icon" />
                </div>
                <span className={classes.TopText}>{props.title}</span>
            </div>
            {/* <div className={classes.DivLine}></div> */}
            <div className={props.small ? classes.GradeSmall : classes.Grade}>
                <span>{props.main}</span>
            </div>
            {/* <div className={classes.DivLine}></div> */}
            <div className={classes.Bottom}>
                <span>{props.footer}</span>
            </div>
        </div>
    )
}

export default GeneralCard