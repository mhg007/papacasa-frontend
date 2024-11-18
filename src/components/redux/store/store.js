import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer  from "../featchers/userDetailsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./services/services";

export const store = configureStore({
  reducer: {
      // app: userDetailReducerz

    [productsApi.reducerPath] : productsApi.reducer
},
middleware: (getDefaultMiddleware)=>
getDefaultMiddleware().concat(productsApi.middleware),
});
setupListeners(store.dispatch)
// (console.log("🚀 ~ userDetail:", app))
