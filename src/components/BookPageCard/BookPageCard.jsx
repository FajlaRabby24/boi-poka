import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { SlDocs } from "react-icons/sl";
import { Link } from "react-router";

const BookPageCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    category,
    bookId,
    totalPages,
    rating,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex gap-6 py-3 px-4  border border-[#ccc] rounded-xl items-center">
      <figure className="py-10 w-1/4 bg-[#f3f3f3] rounded-xl flex items-center justify-center">
        <img src={image} alt="bookImg" className=" h-[170px]" />
      </figure>
      <div className="w-3/4 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="font-semibold text-gray-500">by: {author}</p>
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

          <h5 className="text-lg font-semibold flex items-center gap-2 text-gray-400">
            <CiLocationOn size={25} />
            Year of publishing: {yearOfPublishing}
          </h5>
        </div>
        <p className="flex gap-6 items-center">
          <span className="flex items-center gap-2 text-gray-400">
            <LuUsers size={20} /> Publisher: {publisher}
          </span>{" "}
          <span className="flex items-center gap-2 text-gray-400">
            <SlDocs size={20} /> Page: {totalPages}
          </span>
        </p>
        <hr className="text-gray-200 my-2" />
        <div className="flex gap-4 items-center">
          <span className="px-4 font-semibold py-2 text-blue-600 bg-blue-100 rounded-full">
            Category: {category}
          </span>
          <span className="px-4 font-semibold py-2 text-yellow-600 bg-yellow-100 rounded-full">
            Ratings: {rating}
          </span>
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

export default BookPageCard;
