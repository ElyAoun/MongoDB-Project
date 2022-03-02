import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from '../constants/userConstants.js'


export const registerUserReducer = (state = {}, action) => {
    switch(action.type){
        case REGISTER_USER_REQUEST:
            return {loading: true}
        case REGISTER_USER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case REGISTER_USER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}