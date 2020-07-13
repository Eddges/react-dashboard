import React from 'react'
import classes from './userProfileEducation.module.css'
import GeneralCard from '../generalCard/generalCard'
import collegeIcon from '../../assets/college.svg'
import yearIcon from '../../assets/year.svg'
import bookIcon from '../../assets/book.svg'

class UserProfileEducation extends React.Component {
    render() {
        return(
            <div className={classes.UserProfileEducation}>
                <div className={classes.Card}>
                    <GeneralCard icon={collegeIcon} main="BIT Mesra" title="College" footer="Current College" small />
                </div>
                <div className={classes.Card}>
                    <GeneralCard icon={yearIcon} main="3rd" title="Year" footer="Current Year" small />
                </div>
                <div className={classes.Card}>
                    <GeneralCard icon={bookIcon} main="Computer Science & Engg" title="Course" footer="Current Course" small />
                </div>
                <div className={classes.Card}>
                    <GeneralCard icon={bookIcon} main="7th" title="Semester" footer="Current Semester" small />
                </div>
            </div>
        )
    }
}

export default UserProfileEducation