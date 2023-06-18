/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { Document } from 'mongoose'
export interface IUser extends Document {
  id: string
  password: string
  role: string
  name: {
    firstName: string
    lastName: string
  }
  phoneNumber: string
  address: string
  budget: number
  income: number
}
