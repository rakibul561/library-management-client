import { createSlice } from "@reduxjs/toolkit";
import type { IBook } from "@/types";
import type { RootState } from "../store";

interface InitialState {
  books: IBook[];
}

const initialState: InitialState = {
  books: [
    {
      _id: "asdfvddshhksgdj",
      title: "The Theory of Everything",
      author: "Stephen Hawking",
      image:
        "https://i.ibb.co/jKw9T7z/514472158-735169029209778-5211281774027565317-n.jpg",
      genre: "SCIENCE",
      isbn: "978015331463",
      description: "An overview of cosmology and black holes.",
      copies: 5,
      available: false,
    },
    {
      _id: "asdfvddshhkssdfgdj",
      title: "The Theory of Everything",
      author: "Stephen Hawking",
      image:
        "https://i.ibb.co/jKw9T7z/514472158-735169029209778-5211281774027565317-n.jpg",
      genre: "SCIENCE",
      isbn: "978015331463",
      description: "An overview of cosmology and black holes.",
      copies: 5,
      available: true,
    },
  ],
};

export const counterSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
}); 

 
 export const selectBooks = (state: RootState) => {
   return state.books.books ;
 }



export default counterSlice.reducer;
