import { MAKE_TRANSACTION_REQUEST, MAKE_TRANSACTION_SUCCESS, MAKE_TRANSACTION_FAIL,
        TRANSACTIONS_LIST_REQUEST, TRANSACTIONS_LIST_SUCCESS, TRANSACTIONS_LIST_FAIL} from "../constants/transactionsConstants.js";

export const makeTransactionReducer = (state={}, action) => {
    switch(action.type){
        case MAKE_TRANSACTION_REQUEST:
            return {loading: true}
        case MAKE_TRANSACTION_SUCCESS:
            return {loading: false, transaction: action.payload}
        case MAKE_TRANSACTION_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const transactionsListReducer = (state={ transactions: [] }, action) => {
    switch(action.type){
        case TRANSACTIONS_LIST_REQUEST:
            return {loading: true}
        case TRANSACTIONS_LIST_SUCCESS:
            return {loading: false, transactions: action.payload}
        case TRANSACTIONS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}