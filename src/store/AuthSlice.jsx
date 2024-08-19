import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../api/AxiosInstance";
import axios from 'axios';
import Cookies from "js-cookie";


export const login = createAsyncThunk('auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://212.111.80.94/login', { //Changes made here axios.post
        username, password
      });
      console.log('Response Data:', response.data);
      const { token, isAdmin } = response.data;
       console.log('Access Token:', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      Cookies.set('refreshToken', response.data.refreshToken, {expires: 7, httpOnly: true});

      return {accessToken: token, isAdmin};
    } catch (error) {
      console.error('Error:', error)
      return rejectWithValue(error.response.data.message);
    } } );

    export const refreshToken = createAsyncThunk('auth/refreshToken', async(_, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://212.111.80.94/refresh');
        const {token} = response.data;
         console.log('Access Token:', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        return { accessToken: token};
        
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    } );
    
      // console.log('API response:', response.data);
      // if (response.data) {
      //   return response.data;
      // } else {
      //   return rejectWithValue('Not an admin');
      // }
    // } catch (error) {
    //   if(error.response) {
    //     console.error('Error response data:',
    //     error.response.data);
    //     console.error('Error response status:',
    //     error.response.status);
    //     console.error('Error response headers:',
    //     error.response.headers);
    //     return rejectWithValue(error.response.data.message || 'Server Error');
    //   } else if (error.request) {
    //     console.error('Error request data:', error.request);
    //     return rejectWithValue('No response received from server');
    //   } else {
    //     console.error('Error message:', error.message);
    //     return rejectWithValue(error.message);
    //   }
    // }
  


        const authSlice = createSlice({
          name: 'auth',
          initialState: {
            accessToken: null,
            isAdmin: false,            
            error: null,
          },
          reducers: {
            logout: (state) => {
              state.accessToken = null;
              state.isAdmin = false;              
              state.error = null;

              Cookies.remove('refreshToken');
              delete axios.defaults.headers.common['Authorization'];
            },
          },
          extraReducers: (builder) => { //get to know
            builder.addCase(login.fulfilled, (state, action) => {  //get to know about
              state.accessToken = action.payload.accessToken;
              state.isAdmin = true;
              state.error = null;
            })
              .addCase(login.rejected, (state, action) => {
                state.accessToken = null;
                state.isAdmin = false;                
                state.error = action.payload;
              })
              .addCase(refreshToken.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.error = null;
              })
              .addCase(refreshToken.rejected, (state, action) => {
                state.accessToken = null;
                state.error = action.payload;
              });
          },
        });

export const { logout } = authSlice.actions;
export default authSlice.reducer;