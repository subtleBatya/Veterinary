// import { createStore } from 'redux'
// import rootReducer from "./reducers/rootreducer"

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});
export default store;
