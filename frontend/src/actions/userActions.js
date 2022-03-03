import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
        USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_FAIL,
        USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL,
        USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL} from '../constants/userConstants.js'
import axios from 'axios'

export const register = (name, email, password, age, walletAddress) => async(dispatch) => {
    try{
        dispatch({
            type: REGISTER_USER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/users',
            {name, email, password, age, walletAddress },
            config
        )

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })

        window.location.href='/'
        
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const getUsers = () => async(dispatch) => {
    try{
        dispatch({
            type: USERS_LIST_REQUEST
        })

        const {data} = await axios.get('/api/users')

        dispatch({
            type: USERS_LIST_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: USERS_LIST_FAIL,
            payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updateUser = (id, name, email, password, age, walletAddress) => async(dispatch) => {
    try{
        dispatch({
            type: USER_UPDATE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.put(
            `/api/users/${id}`,
            {name, email, password, age, walletAddress },
            config
        )

        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try{
        dispatch({
            type: USER_DELETE_REQUEST
        })

        await axios.delete(`/api/users/${id}`)

        dispatch({
            type: USER_DELETE_SUCCESS
        })
    } catch (error){
        dispatch({
            type: USER_DELETE_FAIL,
            payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}