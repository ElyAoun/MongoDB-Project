import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTransactions} from '../actions/transactionActions.js'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import {Table, Button} from 'react-bootstrap'
import moment from 'moment'

const TransactionsScreen = () => {

  const dispatch = useDispatch()

  const transactionsList = useSelector((state)=>state.transactionsList)
  const {loading, error, transactions} = transactionsList

  useEffect(()=>{
      dispatch(getTransactions())
  }, [dispatch])

  return (
    <div>
    <h1>Transactions</h1>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>SENDER</th>
            <th>RECEIVER</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th>NETWORK</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction._id}</td>
              <td>{transaction.sender}</td>
              <td>{transaction.receiver}</td>
              <td>{transaction.amount_usd}</td>
              <td>{moment(transaction.transaction_date).format('DD/MM/YYYY HH:MM:SS')}</td>
              <td>{transaction.transaction_type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </div>
  )
}

export default TransactionsScreen