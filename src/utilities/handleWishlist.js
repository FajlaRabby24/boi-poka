import { toast } from "react-toastify";
import { addReadBookToLS, getReadBookFromLS } from "./handleDB";

const getWishlistFromLS = () => {
  let savedCart = localStorage.getItem("wisthlist");
  if (savedCart) {
    savedCart = JSON.parse(savedCart);
    return savedCart;
  } else {
    return (savedCart = []);
  }
};

const removeFromWishList = (id) => {
  const wishList = getWishlistFromLS();
  const newWishList = wishList.filter((bookId) => bookId !== id);
  saveWishlistToLS(newWishList);
  addReadBookToLS(id);
};

const saveWishlistToLS = (cart) => {
  const stringify = JSON.stringify(cart);
  localStorage.setItem("wisthlist", stringify);
};

const addWisthlistToLS = (id) => {
  let savedCart = getWishlistFromLS();
  const isExist = getReadBookFromLS();
  if (isExist.includes(id)) {
    toast.warning("This Book is Already You Read!", { autoClose: 1000 });
    return;
  }
  if (savedCart.includes(id)) {
    toast.warning("This Book already Added to Wish List", { autoClose: 1000 });
    return;
  }
  savedCart.push(id);
  saveWishlistToLS(savedCart);
  toast.success("Book Added to Wish List", { autoClose: 1000 });
};

export { addWisthlistToLS, getWishlistFromLS, removeFromWishList };
