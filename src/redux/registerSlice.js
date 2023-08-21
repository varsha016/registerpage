import { createSlice } from "@reduxjs/toolkit";
import registerAction from "./registerAction";

const RegisterSlice = createSlice({
    name:"register",
    initialState:{},
    reducers:{},
    extraReducers(builder){
builder 
.addCase(registerAction.pending, (state, { payload }) => {
    state.loading = true
})
.addCase(registerAction.fulfilled, (state, { payload }) => {
    state.loading = false
    state.registration = payload
})
.addCase(registerAction.rejected, (state, { payload }) => {
    state.loading = false
    state.error = payload
})
    }
}) 

export default RegisterSlice.reducer