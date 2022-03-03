import {MAKE_TRANSACTION_REQUEST, MAKE_TRANSACTION_SUCCESS, MAKE_TRANSACTION_FAIL,
        TRANSACTIONS_LIST_REQUEST, TRANSACTIONS_LIST_FAIL, TRANSACTIONS_LIST_SUCCESS} from '../constants/transactionsConstants.js'
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

        window.location.href='/transactions'

    } catch (error) {
        dispatch({
            type: MAKE_TRANSACTION_FAIL,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const getTransactions = () => async(dispatch) => {
    try{
        dispatch({
            type: TRANSACTIONS_LIST_REQUEST
        })

        const {data} = await axios.get('/api/transactions')

        dispatch({
            type: TRANSACTIONS_LIST_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: TRANSACTIONS_LIST_FAIL,
            payload:error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}