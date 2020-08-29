import _ from 'lodash'
import * as ACTIONS from '../actions/actionTypes'

const INITIAL_STATE = {
    token: localStorage.getItem('token') || ""
}

const loginReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case ACTIONS.UPDATE_TOKEN:
            localStorage.setItem('token',_.get(action,'data.token'))
            return {
                ...state,
                token: _.get(action,'data.token')
            }
        default:
            return state
    }
}

export default loginReducer;