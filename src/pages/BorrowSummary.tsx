/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBorrowSummaryQuery } from "@/api/bookApi";
import Loading from "@/loading";
import { Link } from "react-router";

export function BorrowSummary() {
  const { data, error, isLoading } = useGetAllBorrowSummaryQuery(undefined);
  console.log("data is ", data);

  if (isLoading) return <Loading />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <div className="min-h-[calc(104vh-200px)]">
      <h2 className="text-2xl font-bold text-center justify-center mt-10 mb-4">
        Borrow Summary
      </h2>
      <hr />
      {data?.data && data.data.length > 0 ? (
        <table className="max-w-7xl mt-10 mx-auto border border-gray-300">
          <thead>
            <tr className="">
              <th className="border px-4 py-2">Book Title</th>
              <th className="border px-4 py-2">ISBN</th>
              <th className="border px-4 py-2">Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item: any, index: number) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{item.book.title}</td>
                <td className="border px-4 py-2">{item.book.isbn}</td>
                <td className="border px-4 py-2">{item.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
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
            <h3 className="text-2xl font-semibold text-red-600 mb-2">
              No Borrow Summary Found!
            </h3>
            <p className="text-gray-600 mb-4">
              You haven’t borrowed any books yet. Start exploring and borrow
              books now!
            </p>
            <Link
              to="/all-books"
              className="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition"
            >
              Browse All Books
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
