import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/BookSlice";  
import { bookApi } from "@/api/bookApi";

export const store = configureStore({
  reducer: {
    book: bookReducer,  
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
