import express from 'express'
import { registerUser, updateUserProfile, deleteUser, getUsers } from '../controllers/userController.js'

const router = express.Router()

router.post('/', registerUser)
router.get('/', getUsers)
router.route('/:id').put(updateUserProfile).delete(deleteUser)

export default router