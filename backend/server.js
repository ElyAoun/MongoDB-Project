import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import transactionRoutes from './routes/transactionRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json()) 

app.get('/', (req, res)=>{
    res.send('API is running...')
})

app.use('/api/users', userRoutes)
app.use('/api/transactions', transactionRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))