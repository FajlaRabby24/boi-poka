import React, { useEffect, useState } from "react";
import BookPageCard from "../../../components/BookPageCard/BookPageCard";
import { getWishlistFromLS } from "../../../utilities/handleWishlist";

const WishListTabPanel = () => {
  const [wishBooks, setWishBooks] = useState([]);
  useEffect(() => {
    const wishBookId = getWishlistFromLS();
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = data.filter((book) =>
          wishBookId.includes(book.bookId)
        );
        setWishBooks(filteredBooks);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {wishBooks.map((book) => (
        <BookPageCard key={book.bookId} book={book}></BookPageCard>
      ))}
    </div>
  );
};

export default WishListTabPanel;
