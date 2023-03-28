import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email:''
  }
export const usersSlices = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {    
    addUser:(state,action)=>{
    state.email = action.payload
}
}})
export const {addUser}= usersSlices.actions

export default usersSlices.reducer
