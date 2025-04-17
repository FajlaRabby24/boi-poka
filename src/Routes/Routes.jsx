import { createBrowserRouter } from "react-router";
import BookDetails from "../pages/BookDetails/BookDetails";
import Books from "../pages/Books/Books";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import PageToRead from "../pages/PageToRead/PageToRead";
import Root from "../pages/Root/Root";
import { getReadBookFromLS } from "../utilities/handleDB";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "pagetoread",
        loader: () => {
          const readBookId = getReadBookFromLS();
          const returnData = fetch("/booksData.json")
            .then((res) => res.json())
            .then((data) => {
              const filterBooks = data.filter((book) =>
                readBookId.includes(book.bookId)
              );
              return filterBooks;
            });
          return returnData;
        },
        Component: PageToRead,
      },
      {
        path: "book/:id/details",
        loader: ({ params }) => {
          const bookData = fetch("/booksData.json")
            .then((res) => res.json())
            .then((data) => {
              const findData = data.find(
                (book) => book.bookId === parseInt(params.id)
              );
              return findData;
            });
          return bookData;
        },
        Component: BookDetails,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
