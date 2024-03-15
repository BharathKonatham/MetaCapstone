import { configureStore } from '@reduxjs/toolkit'
import ReservationReducer from './ReservationSlice'
export const store = configureStore({
  reducer: {
    Reservation: ReservationReducer
  },
})