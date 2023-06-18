import express from 'express'
import ordersController from './orders.controller'

const router = express.Router()

router.post('/', ordersController.createOrder)
router.get('/', ordersController.getAllOrders)

export default router
