import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    transaction_date: {
        type: Date,
        required: true
    },
    amount_usd: {
        type: Number,
        required: true,
        default: 0
    },
    transaction_type: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction