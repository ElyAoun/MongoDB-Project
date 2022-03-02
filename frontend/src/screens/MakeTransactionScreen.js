import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {makeTransactionAction} from '../actions/transactionActions.js'
import Select from 'react-select'

const MakeTransactionScreen = ({location, history}) => {
  const [receiver, setReceiver] = useState('')
  const [amount, setAmount] = useState(0)
  const [transactionType, setTransactionType] = useState('')

  const userInfo = localStorage.getItem('userInfo')
  const userInfoData = JSON.parse(userInfo)

  console.log(userInfoData)
  
  const dispatch = useDispatch()

  const makeTransaction = useSelector((state)=>state.makeTransaction)
  const {loading, error, transaction} = makeTransaction

  let currentDate = new Date();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(makeTransactionAction(userInfoData._id, receiver, currentDate, amount, transactionType))
    window.location.href='/'
  }


  const types_options = [
    {label: "Bitcoin", value:"Bitcoin"},
    {label: "Ethereum", value:"Ethereum"},
    {label: "Solana", value:"Solana"},
    {label: "Binance Smart Chain", value:"Binance Smart Chain"},
    {label: "Cardano", value:"Cardano"},
]


  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="receiver">
        <Form.Label>Receiver</Form.Label>
        <Form.Control 
                  type="text" 
                  placeholder="Select Receiver"
                  value={receiver}
                  onChange={(e)=>setReceiver(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control 
                  type="text" 
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e)=>setAmount(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Transaction Type</Form.Label>
        <Select
                options={types_options}
                placeholder="Select Type"
                onChange={opt => setTransactionType(opt.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default MakeTransactionScreen