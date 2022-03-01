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

export {
    registerUser
}