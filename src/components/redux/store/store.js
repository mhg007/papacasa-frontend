import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { papaCasaApi } from "../services/services";
import multiStepFormReducer from "../slice/formDataSlice"; // Import the slice reducer

export const store = configureStore({
  reducer: {
    [papaCasaApi.reducerPath]: papaCasaApi.reducer,
    multiStepForm: multiStepFormReducer, // Add the multiStepForm slice here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(papaCasaApi.middleware),
});

setupListeners(store.dispatch);
