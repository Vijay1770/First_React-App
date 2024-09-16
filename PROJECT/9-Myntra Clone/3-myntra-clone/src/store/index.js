import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";



const myntrastore=configureStore({ //in This section of store firstly we provide "reducer" and in reducer we need to provide "'name' which is items..."
  reducer:{
    items:itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
  }
})
export default myntrastore;