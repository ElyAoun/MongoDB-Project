import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
        USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_FAIL,
        USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL,
        USER_UPDATE_REQUEST, USER_UPDATE_FAIL, USER_UPDATE_SUCCESS} from '../constants/userConstants.js'


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

export const usersListReducer = (state = { users : [] }, action) => {
    switch(action.type){
        case USERS_LIST_REQUEST:
            return {loading: true}
        case USERS_LIST_SUCCESS:
            return {loading: false, users: action.payload}
        case USERS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const userUpdateReducer = (state = {}, action) => {
    switch(action.type){
        case USER_UPDATE_REQUEST:
            return {loading: true}
        case USER_UPDATE_SUCCESS:
            return {loading: false, user: action.payload}
        case USER_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const userDeleteReducer = (state = { }, action) => {
    switch(action.type){
        case USER_DELETE_REQUEST:
            return {loading: true}
        case USER_DELETE_SUCCESS:
            return {loading: false, success: true}
        case USER_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}