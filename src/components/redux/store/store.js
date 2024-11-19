import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { papaCasaApi } from "../services/services";

export const store = configureStore({
  reducer: {
    [papaCasaApi.reducerPath] : papaCasaApi.reducer
},
middleware: (getDefaultMiddleware)=>
getDefaultMiddleware().concat(papaCasaApi.middleware),
});
setupListeners(store.dispatch)
// (console.log("🚀 ~ userDetail:", app))
