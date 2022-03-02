import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { registerUserReducer } from './reducers/userReducers.js'
import {makeTransactionReducer} from './reducers/transactionReducers.js'

const reducer = combineReducers({
    registerUser: registerUserReducer,
    makeTransaction: makeTransactionReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store