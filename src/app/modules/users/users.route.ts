import express from 'express'
import usersController from './users.controller'

const router = express.Router()

router.post('/auth/signup', usersController.createUser)
router.get('/users/:id', usersController.getSingleUser)
router.patch('/users/:id', usersController.updateUser)
router.delete('/users/:id', usersController.deleteUser)
router.get('/users/', usersController.getAllUsers)

export default router
