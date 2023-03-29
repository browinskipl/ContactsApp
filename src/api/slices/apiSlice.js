import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/users.json',
    }),
  }),
})
export const { useGetContactsQuery } = apiSlice
