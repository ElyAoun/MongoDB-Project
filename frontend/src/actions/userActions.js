import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from '../constants/userConstants.js'
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

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}