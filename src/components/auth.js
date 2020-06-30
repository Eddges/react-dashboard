import React from 'react'
import Logo from '../assets/CodeAsylums.png'
import login_left from '../assets/login-left.png'
import classes from './auth.module.css'

class Auth extends React.Component {
    render() {
        return (
            <div className={ classes.Container }>
                <div className={ classes.image }>
                    <img className={ classes.loginLeft} src={ login_left } alt="Illustration" />
                </div>

                <div className={ classes.formContainer}>
                    <img className={ classes.Logo} src={ Logo } alt="CodeAsylums Logo" />
                    <p className={ classes.LoginText }>Log into your account</p>
                    <p className={ classes.LoginTextDetails}>Access to the most powerful tool in the entire design and web industry.</p>
                    <p className={ classes.Login }>LogIn</p>
                    <div className={ classes.LoginLine}></div>
                    <form className={ classes.form }>
                        {/* <label>eMail</label> */}
                        <input type="text" placeholder="Enter your eMail" />
                        {/* <label>Password</label> */}
                        <input type="password" placeholder="Enter your password" />
                        <div className={classes.buttonDiv}>
                            <button className={classes.LoginButton} type="button">LogIn</button>
                            <button className={classes.ForgotPassword} type="button">Forgot Password?</button>
                        </div>
                        
                    </form>

                    <div className={classes.bottomDiv}>
                        <p>Experiencing Trouble?</p>
                        <p>Maverick</p>
                        <p>Ace</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth