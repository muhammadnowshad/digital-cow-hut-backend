import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import usersRouter from './app/modules/users/users.route'
import cowsRouter from './app/modules/cows/cows.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//user api
app.use('/api/v1/', usersRouter)

//cows api
app.use('/api/v1/cows/', cowsRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('Database Connected Successfully')
})

//global error handler
app.use(globalErrorHandler)

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
