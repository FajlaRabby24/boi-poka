import React, { useEffect, useState } from "react";
import BookPageCard from "../../../components/BookPageCard/BookPageCard";
import { getReadBookFromLS } from "../../../utilities/handleDB";

const ReadTabPanel = () => {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const readBookId = getReadBookFromLS();
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = data.filter((book) =>
          readBookId.includes(book.bookId)
        );
        setReadBooks(filteredBooks);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {readBooks.map((book) => (
        <BookPageCard key={book.bookId} book={book}></BookPageCard>
      ))}
    </div>
  );
};

export default ReadTabPanel;
