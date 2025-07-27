import { useDeleteBookMutation } from "@/api/bookApi";
import { UpdateBookModal } from "@/pages/books/UpdateBook";
import { AddBorrowBook } from "@/pages/borrow/BorrowModal";
import type { IBook } from "@/types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

interface Props {
  book: IBook;
}

const BookCard: React.FC<Props> = ({ book }) => {
  const [deleteBook] = useDeleteBookMutation();
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleDeleteBook = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      toast.success("Books deleted succesfulluy");
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("something went wrong");
    }
  };

  const { author, available, genre, image, title, copies, isbn, _id } = book;

  return (
    <>
      <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow duration-300 ease-in-out">
  <img
    src={
      image ||
      "https://via.placeholder.com/400x250?text=No+Image+Available"
    }
    alt={title}
    className="w-full h-48 object-cover object-center"
  />
  <div className="p-5 space-y-3">
    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
      {title}
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-300">
      <span className="font-medium">Author:</span> {author}
    </p>
    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
      <p>
        <span className="font-medium">Genre:</span> {genre}
      </p>
      <p>
        <span className="font-medium">ISBN:</span> {isbn}
      </p>
    </div>
    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
      <p>
        <span className="font-medium">Copies:</span> {copies}
      </p>
      <p
        className={`font-semibold ${
          available ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
        }`}
      >
        {available ? " ✅ Available" : "❌ Unavailable"}
      </p>
    </div>

    <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-3">
      <Link
        to="#"
        onClick={() => setEditModalOpen(true)}
        className="flex items-center justify-center gap-2 w-full border border-red-300  py-2 px-4 rounded-sm transition-colors duration-200 ease-in-out text-sm font-medium"
      >
        <FaRegEdit />
        Edit
      </Link>
      <button
        onClick={() => handleDeleteBook(_id)}
        className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white py-2 px-4 rounded-sm transition-colors duration-200 ease-in-out text-sm font-medium"
      >
        <MdOutlineDeleteForever className="text-lg" />
        <span>Delete</span>
      </button>

      <AddBorrowBook bookId={_id} />
    </div>
  </div>
</div>


      {/* ✅ Update Modal */}
      {editModalOpen && (
        <UpdateBookModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          defaultValues={book}
        />
      )}
    </>
  );
};

export default BookCard;
