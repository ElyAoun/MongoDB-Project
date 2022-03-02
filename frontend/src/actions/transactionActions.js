import {MAKE_TRANSACTION_REQUEST, MAKE_TRANSACTION_SUCCESS, MAKE_TRANSACTION_FAIL} from '../constants/transactionsConstants.js'
import axios from 'axios'

export const makeTransactionAction = (sender, receiver, transaction_date, amount_usd, transaction_type) => async(dispatch) => {
    try{
        dispatch({
            type: MAKE_TRANSACTION_REQUEST
        })

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/transactions',
            {sender, receiver, transaction_date, amount_usd, transaction_type},
            config
        )

        dispatch({
            type: MAKE_TRANSACTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MAKE_TRANSACTION_FAIL,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}