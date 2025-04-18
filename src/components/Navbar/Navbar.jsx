import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/books"}>Books</NavLink>
              <NavLink to={"/pagetoread"}>Page to Read</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Boi Poka</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 items-center">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/pagetoread"}>Page to Read</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link
            className={"btn bg-[#24b830] text-white font-semibold border-0"}
          >
            Sign in
          </Link>
          <Link className={"btn bg-[#55c3d6] text-white font-semibold"}>
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
