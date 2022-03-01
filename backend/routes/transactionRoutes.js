import express from 'express'
import { makeTransaction } from '../controllers/transactionController.js'

const router = express.Router()

router.post('/', makeTransaction)

export default router