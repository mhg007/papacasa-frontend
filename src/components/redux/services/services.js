import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithRefresh from "./baseQueryWithRefresh";

export const papaCasaApi = createApi({
  reducerPath: "papaCasa",
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({
    getListings: builder.query({
      query: (params) => {
        const userId = params.userId
        const queryString = new URLSearchParams(params).toString();
        if(params.city || params.max_price || params.min_price|| params.no_of_rooms || params.type || params.searchType)
        return `listings/?${queryString}`;
      else if (userId){
        return `listings/?user=${userId}`;
      }
      else{
        return `listings/`;
      }
      },
    }),

    userData: builder.query({
      query: () => "users/",
    }),
    listOneData: builder.query({
      query: () => "listing-types",
    }),
    dropDownData: builder.query({ 
      query: () => "dropdown-data/",
    }),
    listingFeatures: builder.query({ 
      query: () => "listing-features",
    }),
    uploadFile: builder.mutation({
      query: ({ payload }) => ({
        url: "/uploadfiles",
        method: "POST",
        body: payload,
      }),
    }),
    favoritesIcon: builder.mutation({
      query: ({ payload }) => ({
        url: "favorites/",
        method: "POST",
        body: payload,
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
  useSignUpUserMutation,
  useFavoritesIconMutation,
  useSubmitFormDataMutation,
  useUploadFileMutation,
  useUserDataQuery,
  useListOneDataQuery,
  useDropDownDataQuery,
  useListingFeaturesQuery,
} = papaCasaApi;
