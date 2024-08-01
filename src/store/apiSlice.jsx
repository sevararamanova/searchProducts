import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }), // Dummy API URL
  endpoints: (builder) => ({
    searchProducts: builder.query({
      query: (query) => `/products/search?q=${query}`,
    }),
    getMostPopularProducts: builder.query({
      query: () => '/products', // Adjust according to your API endpoint
    }),
    promoteUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/registered-users/${userId}/promote`,
        method: 'POST',
      }),
    }),
  }),
});

export const { 
  useSearchProductsQuery, 
  useGetMostPopularProductsQuery, 
  usePromoteUserMutation 
} = apiSlice;
