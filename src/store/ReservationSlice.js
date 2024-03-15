import { createSlice } from "@reduxjs/toolkit";



export const ReservationSlice = createSlice({
name:'reservations',
initialState : {
    ReservationDetails : []
},
reducers:{

    AddReservDetails:(state,action)=>{
        state.ReservationDetails = [action.payload,...state.ReservationDetails]
    }
}

})

export const {AddReservDetails} = ReservationSlice.actions
export default ReservationSlice.reducer