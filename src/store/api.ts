import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IQuery } from '../types/unistory.types'

const API_URL = "https://new-backend.unistory.app/api/data"

export const unistoryApi = createApi({
  reducerPath: 'unistoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllData: builder.query<IQuery, Number>({
      query: (page) => `?page=${page}`,
    }),
  }),
})


export const { useGetAllDataQuery } = unistoryApi