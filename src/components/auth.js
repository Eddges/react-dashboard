import React from 'react'
import Logo from '../assets/CodeAsylums.png'
import login_left from '../assets/login-left.png'
import classes from './auth.module.css'
import LoginForm from './loginForm/loginForm'
import SignUpForm from './signUpForm/signUpForm'

class Auth extends React.Component {
    state = {
        current : 1,
        signUp : {
            choice : 'student'
        }
    }

    loginStateChanger = () => {
        this.setState({
            current : 1
        })
    }

    signUpStateChanger = () => {
        this.setState({
            current : 2
        })
    }

    choiceHandler = (val) => {
        if(val){
            this.setState({
                ...this.state,
                signUp : {
                    choice : val
                }
            })
        }
        setTimeout(() => {
            console.log(this.state.signUp.choice)
        },0)
    }



    render() {
        let currentForm = <LoginForm />

        if(this.state.current === 2 ) {
            currentForm = <SignUpForm choiceHandler={(value) => this.choiceHandler(value)} choice={this.state.signUp.choice} />
        }

        return (
            <div className={ classes.Container }>
                <img className={ classes.Logo} src={ Logo } alt="CodeAsylums Logo" />
                <div className={ classes.image }>
                    <img className={ classes.loginLeft} src={ login_left } alt="Illustration" />
                </div>

                <div className={ classes.formContainer}>
                    
                    <p className={ classes.LoginText }>Student Portal</p>
                    <p className={ classes.LoginTextDetails}>Access the myriad of information at your disposal for being our student</p>
                    <div className={classes.menuDiv}>
                        <div className={classes.loginButtonDiv}>
                            <p className={ classes.Login } onClick={ this.loginStateChanger }>LogIn</p>
                            {this.state.current===1 ? <div className={ classes.LoginLine}></div> : null}
                            
                        </div>
                        <div className={classes.signUpButtonDiv}>
                            <p className={ classes.SignUp } onClick={ this.signUpStateChanger }>Sign Up</p>
                            {this.state.current===2 ? <div className={ classes.SignUpLine}></div> : null}
                        </div>
                        
                    </div>
                    
                    
                    <form className={ classes.form }>
                        { currentForm }
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