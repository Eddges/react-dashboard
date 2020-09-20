import React from 'react'
import classes from './loginForm.module.css'

const LoginForm = (props) => {
    return (
        <div className={classes.loginForm}>
            <input type="text" placeholder="Enter your E-Mail" onChange={(e) => props.handleChange("email",e.target.value)} value={props.login.email}/>
            <input type="password" placeholder="Enter your password" onChange={(e) => props.handleChange("password",e.target.value)} value={props.login.password}/>
            <input type="radio" name="user_role" value={1} checked={props.login.user_role===1} onChange={(e)=>props.handleChange("user_role",1)}/> Student
            <input type="radio" name="user_role" value={2} checked={props.login.user_role===2} onChange={(e)=>props.handleChange("user_role",2)}/> Mentor
            <input type="radio" name="user_role" value={3} checked={props.login.user_role===3} onChange={(e)=>props.handleChange("user_role",3)}/> Teaching Assistant
            <div className={classes.buttonDiv}>
                <button className={classes.LoginButton} type="button" onClick={props.handleSubmit}>LogIn</button>
                {/* <button className={classes.ForgotPassword} type="button">Forgot Password?</button> */}
            </div>
        </div>
    )
}

export default LoginForm