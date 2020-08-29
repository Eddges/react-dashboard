import _ from 'lodash';
import axios from 'axios';

import {SIGNUP_URL,LOGIN_URL} from '../constants/urls'
import * as ACTIONS from './actionTypes';

export const signupRequest = (payload) => (dispatch) => {
    const {email,first_name,last_name,password,user_role,mobile,gender} = payload
    axios.request({
        url: SIGNUP_URL,
        method: "post",
        headers: {'Content-Type': 'application/json'},
        data:{
            email:email,
            first_name:first_name,
            last_name:last_name,
            password:password,
            user_role: user_role,
            mobile:mobile,
            gender:gender
        }
    }).then(res=>{
        const token = _.get(res,'data.token')
        dispatch({type:ACTIONS.UPDATE_TOKEN,data:{token:token}})

    }).catch(err=>{
        console.log(err);
    })
}

export const loginRequest = (payload) => (dispatch) => {
    const {email,password,user_role} = payload
    axios.request({
        url: LOGIN_URL,
        method: "post",
        headers: {'Content-Type': 'application/json'},
        data:{
            email:email,
            password:password,
            user_role: user_role
        }
    }).then(res=>{
        const token = _.get(res,'data.token')
        dispatch({type:ACTIONS.UPDATE_TOKEN,data:{token:token}})

    }).catch(err=>{
        console.log(err);
    })
}