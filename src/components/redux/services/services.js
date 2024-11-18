import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const productsApi = createApi({
    reducerPath:"products",
    baseQuery: fetchBaseQuery({baseUrl:"https://papacasa.caansoft.com/api/"}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query: ()=> ""
        }),
    }),

})


export const {useGetAllProductsQuery} = productsApi