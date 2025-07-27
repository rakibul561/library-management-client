import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["book", "borrow"], 
  endpoints: (builder) => ({
    addBooks: builder.mutation({
      query: (bookData) => ({
        url: "/books/create-book",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),

    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),

    updateBook: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["book"],
    }),

    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: `/borrow`, 
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["book", "borrow"],
    }),
      getAllBorrowSummary: builder.query({
      query: () => "/borrow",
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
