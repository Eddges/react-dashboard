import React, {useState} from 'react'
import classes from './loginForm.module.css'
import {withRouter} from 'react-router-dom'

const LoginForm = (props) => {
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = () => {
        if (inputData.email==='admin@codeasylums.com' && inputData.password==='admin')
        {
            props.history.push('/home')
        }
        else {
            alert('Wrong emailId or password. Please try again')
        }
    }

    return (
        <div className={classes.loginForm}>
            <input type="text" onChange={(e) => setInputData({...inputData, email: e.target.value})} placeholder="Enter your eMail" />
            <input type="password" onChange={(e) => setInputData({...inputData, password: e.target.value})} placeholder="Enter your password" />
            <div className={classes.buttonDiv}>
                <button className={classes.LoginButton} type="button" onClick={handleLogin}>LogIn</button>
                <button className={classes.ForgotPassword} type="button">Forgot Password?</button>
            </div>
        </div>
        
    )
}

export default withRouter(LoginForm)