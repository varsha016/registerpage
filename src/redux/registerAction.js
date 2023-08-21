import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registerAction= createAsyncThunk("add/register", async (singup,{rejectWithValue,getState})=>{
    try {
        const { data } = await axios.post("http://localhost:5000/singUp", singup)
        return data
       

    } catch (error) {
        rejectWithValue(error)
    }
})
export default registerAction