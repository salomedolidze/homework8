import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const getUserBe=createAsyncThunk("getuser/getUserBe",async()=>{
    const {data}=await axios.get("http://localhost:3001/users")

    // console.log("dd", data)
    return data
})


export const postUser =createAsyncThunk("getuser/getUserBe",async(newuser,{dispatch})=>{
    const {data}=await axios.post("http://localhost:3001/users",newuser)
    await dispatch(getUserBe())
    return data
})

export const deleteUser= createAsyncThunk("getuser/deleteUser",async(id,{dispatch})=>{
    const {data}=await axios.delete(`http://localhost:3001/users/${id}`)
    await dispatch(getUserBe())
    return data


})

const getUserSlice=createSlice({
    name:"getuser",
    initialState:{
        data:[],
        loading:false,
        error:null

    },
    
    
    extraReducers:(bulder)=>{
        bulder.addCase(getUserBe.pending,(state)=>{
            state.loading=true
        })
        bulder.addCase(getUserBe.fulfilled,(state,action)=>{
            console.log("action",action)
            state.data=action.payload.data

            state.loading=false
        })
 
        bulder.addCase(getUserBe.rejected,(state)=>{
            state.error="ups"
            state.loading=false

        })

    }
}
)


export const getuserreducer=getUserSlice.reducer