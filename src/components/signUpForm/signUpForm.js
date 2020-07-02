import React from 'react'
import mentorIcon from '../../assets/mentorIcon.png'
import studentIcon from '../../assets/studentIcon.png'
import taIcon from '../../assets/taIcon.png'
import classes from './signUpForm.module.css'

const SignUpForm = (props) => {
    return (
        <div className={classes.signUpForm}>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Enter your eMail" />
            <input type="password" placeholder="Enter your password" />
            <div className={classes.iconDiv}>
                <div className={props.choice==='student'? `${classes.iconDivChild} ${classes.iconDivChildActive}` : classes.iconDivChild} onClick={ () => props.choiceHandler('student')}>
                    <img  src={studentIcon} alt="Student" />
                    <span>Student</span>
                </div>
                <div className={props.choice==='mentor'? `${classes.iconDivChild} ${classes.iconDivChildActive}` : classes.iconDivChild} onClick={ () => props.choiceHandler('mentor')} >
                    <img  src={mentorIcon} alt="Mentor"  />
                    <span>Mentor</span>
                </div>
                <div className={props.choice==='ta'? `${classes.iconDivChild} ${classes.iconDivChildActive}` : classes.iconDivChild} onClick={ () => props.choiceHandler('ta')} >
                    <img  src={taIcon} alt="Teaching Assisstant" />
                    <span>TA</span>
                </div>
                
            </div>
            <div className={classes.buttonDiv}>
                <button className={classes.LoginButton} type="button">Sign Up</button>
                {/* <button className={classes.ForgotPassword} type="button"></button> */}
            </div>
        </div>
        
    )
}

export default SignUpForm