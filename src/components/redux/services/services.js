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
    getDetail: builder.query({
      query: (params) => {
        console.log("🚀 ~ params:", params)
        return `listings/${params}/`;
      },
    }),

    userData: builder.query({
      query: (params) => {
        console.log("🚀 ~ params:", params)
        return `users/${params}/`
      },
    }),
    listOneData: builder.query({
      query: () => "listing-types",
    }),
    dropDownData: builder.query({
      // Uncommented this endpoint
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
      profileUpdate: builder.mutation({
      query: ({payload}) => ({
        url: "user/profile/",
        method: "PATCH",
        body: payload,
      }),
    })
  }),
});

export const {
  useGetListingsQuery,
  useGetDetailQuery,
  useLoginUserMutation,
  useSignUpUserMutation,
  useFavoritesIconMutation,
  useSubmitFormDataMutation,
  useUploadFileMutation,
  useUserDataQuery,
  useListOneDataQuery,
  useDropDownDataQuery,
  useProfileUpdateMutation,
  useListingFeaturesQuery,
} = papaCasaApi;
