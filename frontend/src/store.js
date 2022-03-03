import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { registerUserReducer, usersListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers.js'
import {makeTransactionReducer, transactionsListReducer} from './reducers/transactionReducers.js'

const reducer = combineReducers({
    registerUser: registerUserReducer,
    usersList: usersListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    makeTransaction: makeTransactionReducer,
    transactionsList: transactionsListReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store