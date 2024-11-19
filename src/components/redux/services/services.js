import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const papaCasaApi = createApi({
  reducerPath: "papaCasa",
  baseQuery: fetchBaseQuery({ baseUrl: "https://papacasa.caansoft.com/api/" }),
  endpoints: (builder) => ({
    // Existing query
    // getAllProducts: builder.query({
    //   query: () => "token/",
    // }),
    // New mutation for login
    loginUser: builder.mutation({
      query: ({payload,headers}) => ({
        url: "token/", 
        method: "POST",
        body: payload,
        headers

      }),
    }),
  }),
});

export const { useLoginUserMutation } = papaCasaApi;
