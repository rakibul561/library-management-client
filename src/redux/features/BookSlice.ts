import { createSlice } from "@reduxjs/toolkit";
import type { IBook } from "@/types";

interface InitialState {
  books: IBook[];
}

const initialState: InitialState = {
  books: [
],
};

export const counterSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
  addBook: (state, action) => {
    state.books.push(action.payload); 
  }
}
}); 




 export const {addBook} = counterSlice.actions;

export default counterSlice.reducer;
