import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loginCredentials : [],
    cartBtn : false
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        setLoginData(state,action){
            state.loginCredentials = action.payload
        },
        showCartBtn(state,action){
            state.cartBtn = action.payload
        },
        logout(state) {
            state.loginCredentials = [];
            state.cartBtn = false;
          }
    }
})

export const { setLoginData,showCartBtn,logout } =  loginSlice.actions;
export default loginSlice.reducer;