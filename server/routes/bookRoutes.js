import express from 'express'

import {bookDriver, getBookings} from '../controllers/authBooking.js'
import userAuth from '../middleware/userAuth.js'

const router= express.Router()

router.post('/book-cafe',userAuth, bookDriver)

router.get('/user-bookings',userAuth, getBookings)

export default router
