import React from "react";
import { useLoaderData } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { addReadBookToLS } from "../../utilities/handleDB";
import { addWisthlistToLS } from "../../utilities/handleWishlist";

const BookDetails = () => {
  const book = useLoaderData();
  const {
    image,
    bookName,
    author,
    category,
    bookId,
    totalPages,
    review,
    rating,
    tags,
    yearOfPublishing,
  } = book;

  const handleRead = (id) => {
    addReadBookToLS(id);
  };

  const handleWish = (id) => {
    addWisthlistToLS(id);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-16">
        <div className="hero ">
          <div className="hero-content flex-col  gap-8 lg:flex-row justify-between">
            <div className="w-2/5  bg-[#f3f3f3] flex justify-center rounded-xl py-20 ">
              <img src={image} className="h-[500px]" />
            </div>
            <div className="w-3/5 flex flex-col gap-3">
              <h1 className="text-5xl font-bold">{bookName}</h1>
              <p className="font-semibold text-gray-500">by: {author}</p>
              <hr className="text-gray-200 my-2" />
              <p className="text-gray-600 font-semibold">{category}</p>
              <hr className="text-gray-200 my-2" />
              <p>
                <strong>Review:</strong>
                {review}
              </p>
              <div className="flex items-center gap-4 mb-2">
                <h5 className="text-lg font-semibold">Tag</h5>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 font-semibold py-2 text-green-600 bg-green-100 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <hr className="text-gray-200 my-2" />
              <p className="font-semibold">
                <span className="text-gray-500">Number of page:</span>{" "}
                {totalPages}
              </p>
              <p className="font-semibold">
                <span className="text-gray-500">Publisher:</span> {author}
              </p>
              <p className="font-semibold">
                <span className="text-gray-500">Year of publishing:</span>{" "}
                {yearOfPublishing}
              </p>
              <p className="font-semibold">
                <span className="text-gray-500">Ratings:</span> {rating}
              </p>
              <div className="flex gap-5">
                <button
                  onClick={() => handleRead(bookId)}
                  className="btn btn-outline btn-primary"
                >
                  Read
                </button>
                <button
                  onClick={() => handleWish(bookId)}
                  className="btn btn-primary"
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
