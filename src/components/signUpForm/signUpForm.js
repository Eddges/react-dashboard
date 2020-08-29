import React from 'react'
import _ from 'lodash'
import mentorIcon from '../../assets/mentorIcon.png'
import studentIcon from '../../assets/studentIcon.png'
import taIcon from '../../assets/taIcon.png'
import classes from './signUpForm.module.css'

export const UserTypes = (props) => {

    const userTypes = [
        {type:1,label:"Student",icon:studentIcon},
        {type:2,label:"Mentor",icon:mentorIcon},
        {type:3,label:"Teaching Assisstant",icon:taIcon},
    ]

    return (
        <div className={classes.iconDiv}>
                {userTypes.map(user => {
                    return(
                        <div key={user.type} className={_.get(props,'signUp.user_role')===user.type ? `${classes.iconDivChild} ${classes.iconDivChildActive}` : classes.iconDivChild} onClick={ () => props.handleChange('user_role',user.type)}>
                            <img  src={user.icon} alt={user.label} />
                            <span>{user.label}</span>
                        </div>
                    );
                })}
        </div>
    );
}

const SignUpForm = (props) => {

    const formFields = [
        {type: "text", placeholder:"First Name", field: "first_name"},
        {type: "text", placeholder:"Middle - Last Name", field: "last_name"},
        {type: "email", placeholder:"Enter your E-Mail", field: "email"},
        {type: "password", placeholder:"Enter Your Password", field: "password"},
        {type: "number", placeholder:"Enter mobile number (without country  code)", field:"mobile"}
    ]

    const genderOptions = [
        {key:"M",label:"Male"},
        {key:"F",label:"Female"},
        {key:"O",label:"Other"}
    ];

    const handleInputChange = (field,e) => {
        props.handleChange(field,e.target.value);
    }

    const handleSubmit = () => {
        props.onSubmit();
    }

    return (
        <div className={classes.signUpForm}>
            {formFields.map(item => {
                return <input key={item.field} type={item.type} placeholder={item.placeholder} onChange={(e)=> handleInputChange(item.field,e)} value={_.get(props.signUp,item.field)}/>
            })}
            <select onChange={(e)=>handleInputChange('gender',e)} value={_.get(props.signUp,'gender',"")}>
                {genderOptions.map(item => {
                    return <option key={item.key} value={item.key}>{item.label}</option>
                })}
            </select>
            <UserTypes {...props}/>
            <div className={classes.buttonDiv}>
                <button className={classes.LoginButton} type="button" onClick={handleSubmit}>Sign Up</button>
                {/* <button className={classes.ForgotPassword} type="button"></button> */}
            </div>
        </div>
    )
}

export default SignUpForm