import Transaction from '../models/transactionModel.js'
import asyncHandler from 'express-async-handler'

// @description Make Transaction
// @Route POST /api/transactions
// @access Public

const makeTransaction = asyncHandler(async (req, res) => {
    const {sender, receiver, transaction_date, amount_usd, transaction_type} = req.body

    const transaction = new Transaction({
        sender, receiver, transaction_date, amount_usd, transaction_type
    })

    const createdTransaction = await transaction.save()

    res.status(201).json(createdTransaction)
})

export {
    makeTransaction
}