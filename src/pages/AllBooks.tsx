/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBooksQuery } from "@/api/bookApi";
import BookCard from "@/components/ui/Card/BookCard";

import Loading from "@/loading";
import { AddTaskModel } from "./books/AddBooksModal";

export default function AllBooks() {
  const { data, isError, isLoading } = useGetAllBooksQuery(undefined);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <p className="text-center mt-10 text-red-500">Something went wrong!</p>
    );
  }

  const books = data?.data || [];

  return (
    <div className="min-h-[calc(108vh-200px)]"> 
     
      <div className="max-w-7xl mx-auto ">
       <h2 className="text-start items-start justify-start text-3xl font-bold p-8">All Books</h2>
     </div>
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 p-4">

        {books.map((book: any) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>

      {data.data?.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="bg-red-100 p-6 rounded-lg shadow-md max-w-md">
            <svg
              className="w-12 h-12 text-red-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M12 9v2m0 4v2m-6.938 4h13.856c1.054 0 1.587-1.278.832-2.084L13.832 4.58c-.55-.597-1.448-.597-1.998 0L5.106 17.916c-.755.806-.222 2.084.832 2.084z"
              />
            </svg>
            <h3 className="text-xl text-red-600 font-semibold mb-2">
              No Books Available
            </h3>
            <p className="text-gray-600 mb-4">
              There are currently no books in the library. You can add a new
              book below.
            </p>
            <div className="flex justify-center">
               <AddTaskModel />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
