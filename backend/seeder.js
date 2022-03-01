// import mongoose from 'mongoose'
// import users from './data/users.js'
// import dotenv from 'dotenv'
// import colors from 'colors'
// import User from './models/userModel.js'
// import connectDB from './config/db.js'

// dotenv.config()

// connectDB()

// const importData= async() => {
//     try{
//         await User.deleteMany()

//         const creadtedUser = await User.insertMany(users)

//         console.log('Data imported'.green.inverse)
//         process.exit()
//     } catch(error){
//         console.log(`Error: ${error}`.red.inverse)
//         process.exit(1)
//     }
// }

// importData()