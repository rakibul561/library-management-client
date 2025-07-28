import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ["book", "borrow"], 
  endpoints: (builder) => ({
    addBooks: builder.mutation({
      query: (bookData) => ({
        url: "/api/books/create-book",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),

    getAllBooks: builder.query({
      query: () => "/api/books",
      providesTags: ["book"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),

    updateBook: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/api/books/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["book"],
    }),

    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: `/api/borrow`, 
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["book", "borrow"],
    }),
      getAllBorrowSummary: builder.query({
      query: () => "/api/borrow",
      providesTags: ["borrow"],
    }),


  }),
});

export const {
  useAddBooksMutation,
  useGetAllBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation, useGetAllBorrowSummaryQuery } = bookApi;
