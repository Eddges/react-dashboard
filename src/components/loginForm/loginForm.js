import React from 'react'
import classes from './loginForm.module.css'

const LoginForm = (props) => {
    return (
        <div className={classes.loginForm}>
            <input type="text" placeholder="Enter your eMail" />
            <input type="password" placeholder="Enter your password" />
            <div className={classes.buttonDiv}>
                <button className={classes.LoginButton} type="button">LogIn</button>
                <button className={classes.ForgotPassword} type="button">Forgot Password?</button>
            </div>
        </div>
        
    )
}

export default LoginForm