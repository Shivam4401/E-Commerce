import React from "react";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Logo w={90} h={50}></Logo>
        </div>

        <div className="flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow">
          <input
            type="text"
            placeholder="search items here"
            className="px-4 outline-none"
          />
          <div className=" text-lg bg-red-400 h-8 min-w-[50px] flex items-center justify-center rounded-r-full text-white">
            <FaSearch />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="text-2xl cursor-pointer bg-red-400 h-9 w-12 flex items-center justify-center rounded-full text-white">
            <FaRegUser />
          </div>

          <div className="flex relative">
            <span className="text-2xl cursor-pointer bg-red-400 h-9 w-12 flex items-center justify-center rounded-full text-white">
              <HiOutlineShoppingCart />
            </span>
            <div
              className="bg-green-800 text-white
             w-4 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-1"
            >
              <p className="text-s">0</p>
            </div>
          </div>

          <div>
            <button className=" cursor-pointer font-bold bg-red-400 h-9 w-12 flex items-center justify-center rounded-full text-white pr-9 pl-9">
              login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
