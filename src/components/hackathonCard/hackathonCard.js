import React from 'react'
import classes from './hackathonCard.module.css'
import HackathonCardIcon from '../../assets/trophy.svg'

const HackathonCard = (props) => {
    return(
        <div className={classes.HackathonCard}>
            <div className={classes.Top}>
                <div className={classes.Icon}>
                    <img src={HackathonCardIcon} alt="HackathonCard Icon" />
                </div>
                <span className={classes.TopText}>Hackathons</span>
            </div>
            {/* <div className={classes.DivLine}></div> */}
            <div className={classes.Grade}>
                <span>{props.grade}</span>
            </div>
            {/* <div className={classes.DivLine}></div> */}
            <div className={classes.Bottom}>
                <span>Hackathons Won</span>
            </div>
        </div>
    )
}

export default HackathonCard