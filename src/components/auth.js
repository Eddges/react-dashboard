import React from 'react'
import {connect} from 'react-redux';
import _ from 'lodash'
import { withRouter } from "react-router-dom";

import Logo from '../assets/CodeAsylums.png'
import login_left from '../assets/login-left.png'
import classes from './auth.module.css'
import LoginForm from './loginForm/loginForm'
import SignUpForm from './signUpForm/signUpForm'

import {signupRequest,loginRequest} from '../actions/signupActions'; 

// signUp : {
//     choice : 1,
//     first_name:"",
//     last_name:"",
//     email:"",
//     password:"",
//     mobile:"",
//     gender:""
// },

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current : 1,
            signUp : {
                user_role : 1,
                first_name:"",
                last_name:"",
                email:"",
                password:"",
                mobile:"",
                gender:"M"
            },
            login: {
                email: "",
                password: "",
                user_role:1
            }
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props.token && !state.redirectDone){
            window.location.href="/dashboard";
        }
        return null;
    }

    handleSignupInputChange = (field,value) => {
        let {signUp} = this.state;
        _.set(signUp,field,value);
        this.setState({...this.state,signUp:{...signUp}});
    }

    handleLoginInputChange = (field,value) => {
        let {login} = this.state
        _.set(login,field,value);
        this.setState({...this.state, login:{...login}});
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

    handleSubmit = () => {
        this.props.signupRequest(this.state.signUp)
    }

    handleLoginClick = () => {
        this.props.loginRequest(this.state.login)
    }

    render() {

        let currentForm = <LoginForm handleChange={this.handleLoginInputChange} login={this.state.login} handleSubmit={this.handleLoginClick}/>

        if(this.state.current === 2 ) {
            currentForm = <SignUpForm handleChange={this.handleSignupInputChange} onSubmit={this.handleSubmit} signUp={this.state.signUp}/>
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

const mapStateToProps = ({login}) => {
    const {token} = login;
    return {
        token
    };
}

export default connect(mapStateToProps,{signupRequest,loginRequest})(Auth)