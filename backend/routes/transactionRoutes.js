import express from 'express'
import { makeTransaction, getTransactions } from '../controllers/transactionController.js'

const router = express.Router()

router.post('/', makeTransaction)
router.get('/', getTransactions)

export default router