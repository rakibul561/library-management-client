import type { IBook } from '@/types';
import React from 'react';
import { Link } from 'react-router-dom'; // Changed to react-router-dom for typical usage

type Props = {
  book: IBook;
};

const BookCard: React.FC<Props> = ({ book }) => {
  const { author, available, genre, image, title, copies, isbn } = book;

  return (
    <div className="rounded-xl shadow-lg border border-gray-100 overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={image || 'https://via.placeholder.com/400x250?text=No+Image+Available'}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">{title}</h2>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Author:</span> {author}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p><span className="font-medium">Genre:</span> {genre}</p>
          <p><span className="font-medium">ISBN:</span> {isbn}</p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p><span className="font-medium">Copies:</span> {copies}</p>
          <p className={`font-semibold ${available ? 'text-green-600' : 'text-red-600'}`}>
            {available ? ' ✅ Available' : '❌ Unavailable'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-3">
          <Link
            to=""
            className="flex-1 w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out text-sm font-medium"
          >
            Edit
          </Link>
          <button
            className="flex-1 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 ease-in-out text-sm font-medium"
          >
            Delete
          </button>
          <button
            className="flex-1 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 ease-in-out text-sm font-medium"
          >
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;