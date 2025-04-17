import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { image, bookName, author, bookId, category, rating, tags } = book;
  return (
    <div className="card bg-base-100 border border-[#ccc]">
      <div className="px-6 pt-5  ">
        <figure className="py-10 bg-[#f3f3f3] rounded-xl">
          <img src={image} alt="bookImg" className=" h-[170px]" />
        </figure>
      </div>
      <div className="card-body  text-left">
        <div className="flex gap-4 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 font-semibold py-2 text-green-600 bg-green-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p className="font-semibold text-gray-500">by: {author}</p>
        <hr className="text-gray-200 my-2" />
        <div className="card-actions flex justify-between items-center">
          <p className="text-gray-700 font-medium">{category}</p>
          <p className="text-gray-700 font-medium">{rating}</p>
          <Link to={`/book/${bookId}/details`}>
            <button className="btn btn-xl bg-[#23BE0A] text-white rounded-full">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
