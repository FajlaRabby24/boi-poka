import { toast } from "react-toastify";
import { getWishlistFromLS, removeFromWishList } from "./handleWishlist";

const getReadBookFromLS = () => {
  let savedCart = localStorage.getItem("readBook");
  if (savedCart) {
    savedCart = JSON.parse(savedCart);
    return savedCart;
  } else {
    return (savedCart = []);
  }
};

const saveReadBookToLS = (cart) => {
  const stringify = JSON.stringify(cart);
  localStorage.setItem("readBook", stringify);
};

const addReadBookToLS = (id) => {
  let savedCart = getReadBookFromLS();
  const isExist = getWishlistFromLS();
  if (isExist.includes(id)) {
    removeFromWishList(id);
    toast.warning("This Book is Moov from Wishlist to Read!", {
      autoClose: 1000,
    });
    return;
  }
  if (savedCart.includes(id)) {
    toast.error("Book already You Read", { autoClose: 1000 });
    return;
  }
  savedCart.push(id);
  saveReadBookToLS(savedCart);
  return toast.success("Book Added to Read List", { autoClose: 1000 });
};

export { addReadBookToLS, getReadBookFromLS };
