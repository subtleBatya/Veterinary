import { createSlice } from "@reduxjs/toolkit";
// The Library above uses the immer package to mutate and create a new copy of state

const authSlice = createSlice({
    name: 'auth',
    initialState: {isAdmin: false},
    reducers: {
        login(state){
            state.isAdmin = true;
        },
        logout(state) { 
            state.isAdmin = false;
        },
    }
});
const authActions = authSlice.actions;

export default authSlice;