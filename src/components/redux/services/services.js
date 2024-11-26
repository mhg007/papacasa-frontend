import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithRefresh from "./baseQueryWithRefresh";

export const papaCasaApi = createApi({
  reducerPath: "papaCasa",
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => "listings/",
    }),
    favoritesIcon: builder.mutation({
      query: ({ payload }) => ({
        url: "favorites/",
        method: "POST",
        body: payload
      }),
    }),
    loginUser: builder.mutation({
      query: ({ payload }) => ({
        url: "token/",
        method: "POST",
        body: payload,
      }),
    }),
    signUpUser: builder.mutation({
      query: ({ payload }) => ({
        url: "register/",
        method: "POST",
        body: payload,
      }),
    }),
      submitFormData: builder.mutation({
      query: (formData) => ({
        url: "visits/",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});


export const { 
  useGetListingsQuery, 
  useLoginUserMutation, 
  useSignUpUserMutation ,
  useFavoritesIconMutation
} = papaCasaApi;
