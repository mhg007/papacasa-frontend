import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithRefresh from "./baseQueryWithRefresh";

export const papaCasaApi = createApi({
  reducerPath: "papaCasa",
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => "listings/",
    }),
    userData: builder.query({
      query: () => "users/",
    }),
    uploadFile: builder.mutation({
      query: ({ payload }) => ({
        url: "/uploadfiles",
        method: "POST",
        body: payload
      }),
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
        url: "sign-in/",
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
        url: "listings/",
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
  useFavoritesIconMutation,
  useSubmitFormDataMutation,
  useUploadFileMutation,
  useUserDataQuery
} = papaCasaApi;
