import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const papaCasaApi = createApi({
  reducerPath: "papaCasa",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://papacasa.caansoft.com/api/",
    prepareHeaders: (headers) => {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("token");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`); // Add token to headers
        }
        return headers;
      },
  }),
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
  }),
});
console.log(fetchBaseQuery.headers);


export const { 
  useGetListingsQuery, 
  useLoginUserMutation, 
  useSignUpUserMutation ,
  useFavoritesIconMutation
} = papaCasaApi;
