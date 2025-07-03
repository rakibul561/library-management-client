import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    addBooks: builder.mutation({
      query: (bookData) => ({
        url: "/books/create-book",
        method: "POST",
        body:bookData,
      }),
    }),

    getAllBooks:builder.query({
        query:()=>"/books",
    })
  }),
});

export const {useAddBooksMutation,useGetAllBooksQuery}= bookApi;