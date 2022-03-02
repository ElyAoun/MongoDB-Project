import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {register} from '../actions/userActions.js'

const RegisterScreen = ({location, history}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState(0)
  //const [walletAddress, setWalletAddress] = useState('')

  const dispatch = useDispatch()

  const registerUser = useSelector((state)=>state.registerUser)
  const {loading, error, userInfo} = registerUser

  const walletAddress = "123456789"

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password, age, walletAddress))
    window.location.href='/'
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control 
                  type="text" 
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
                  type="email" 
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control 
                  type="password" 
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control 
                  type="number" 
                  placeholder="Enter Your Age"
                  value={age}
                  onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default RegisterScreen