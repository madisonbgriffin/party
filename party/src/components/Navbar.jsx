import { HiOutlineSearch, HiSearch } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink, Link } from "react-router-dom";

import { Transition, Popover } from "@headlessui/react";

import { Cart, NavbarSearch } from ".";
import { partylogo } from "../assets";
import { useStateContext } from "../context/StateContext";

// Navbar styling classes
const activeLink =
  "underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative";
const normalLink =
  "hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative";

// search bar styling classes
const activeSearch = "mx-5 z-10 relative text-pink-600";
const normalSearch = "mx-5 z-10 relative hover:text-pink-600";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, setQuery } =
    useStateContext();

  return (
    <nav className=" px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0  ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* logo */}
        <Link to="/">
          <img src={partylogo} alt="Logo" className="h-20 mr-3 sm:h-9" />
        </Link>

        {/* links */}
        <div className="flex md:order-2">
          <div>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About
            </NavLink>
            <NavLink
              to="/Shop"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contact
            </NavLink>
            <Popover
              as="div"
              className="relative flex text-left"
              onClick={() => {
                setQuery("");
              }}
            >
              <Popover.Button
                className={({ open }) => (open ? activeSearch : normalSearch)}
              >
                <HiOutlineSearch />
              </Popover.Button>
              <Popover.Panel className="absolute right-0 z-20 mt-11 w-72 origin-top-right rounded-md bg-white">
                <NavbarSearch />
              </Popover.Panel>
            </Popover>
          </div>
        </div>

        {/*shopping cart */}
        <div className="flex md:order-3">
          <button
            type="button"
            onClick={() => setShowCart(true)}
            className=" px-5 py-2.5 mr-3 md:mr-0 text-6xl mx-5 z-10 relative"
          >
            <HiOutlineShoppingBag className="hover:text-pink-600" />
            <span className="absolute text-lg bg-pink-600 rounded-full text-center font-semibold px-2 -right-1 top-8 border-4 border-white">
              {totalQuantities}
            </span>
          </button>
          {showCart && <Cart />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
