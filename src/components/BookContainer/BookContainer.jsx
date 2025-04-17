import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const BookContainer = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-40">
      <h1 className="font-semibold text-4xl text-center mb-10">Books</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default BookContainer;
