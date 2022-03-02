import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

// @desc Create User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, age, walletAddress} = req.body

    const userExists = await User.findOne({ email })

    if(userExists) {
        res.status(400) //bad request
        throw new Error('User already Exists')
    }

    const user = await User.create({
        name, email, password, age, walletAddress
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            age: user.age,
            walletAddress: user.walletAddress
        })
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})


// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.age = req.body.age || user.age
      user.walletAddress = req.body.walletAddress || user.walletAddress
      if (req.body.password) {
        user.password = req.body.password
      }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      age: updatedUser.age,
      walletAddress: updatedUser.walletAddress
    })
    } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      await user.remove()
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})


export {
    registerUser,
    updateUserProfile,
    deleteUser,
    getUsers
}



