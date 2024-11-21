import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const papaCasaApi = createApi({
  reducerPath: "papaCasa",
  baseQuery: fetchBaseQuery({ baseUrl: "https://papacasa.caansoft.com/api/" }),
  endpoints: (builder) => ({
    // Existing query
    // getAllProducts: builder.query({
    //   query: () => "token/",
    // }),
    // New mutation htmlFor login
    loginUser: builder.mutation({
      query: ({payload,headers}) => ({
        url: "token/", 
        method: "POST",
        body: payload,
        headers

      }),
    }),
    // getUser: builder.mutation({
    //   query: ({payload,headers}) => ({
    //     url: "users/", 
    //     method: "GET",
    //     body: payload,
    //     headers

    //   }),
    // }),
    signUpUser: builder.mutation({
      query: ({payload,headers}) => ({
        url: "register/", 
        method: "POST",
        body: payload,
        headers

      }),
    }),
  }),
});

export const { useLoginUserMutation ,useSignUpUserMutation } = papaCasaApi;
