import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers, deleteUser} from '../actions/userActions'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import {Button, Table} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const usersList = useSelector((state)=>state.usersList)
  const {loading, error, users} = usersList

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
      window.location.href='/'
    }
  }

  //users && console.log(users)
  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>Wallet Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>{user.walletAddress}</td>
                <td>
                  <LinkContainer to={`/update/${user._id}`}>
                    <Button variant='success' className='btn-sm'>
                    <i class="material-icons">edit</i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    style={{padding:'.5rem', marginLeft:'.2rem'}}
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i class="material-icons">delete</i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default HomeScreen