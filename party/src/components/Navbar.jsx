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
  const { totalQuantities, setQuery, setIsShowing } = useStateContext();

  return (
    <nav>
      <div className=" w-full top-0 left-0">
      <div className="md:flex py-4 md:px-10 px-7 items-center justify-between">
        {/* logo */}
        <div className="mr-1 pt-2">
        <Link to="/">
          <img src={partylogo} alt="Logo" className="sm:h-9 mr-3 h-20" />
        </Link>
        </div>
        {/* links */}
        <div className="md:flex md:items-center text-white">
          <div className="text-2xl">
            <div className="md:ml-8">
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
            
              About
            </NavLink>
            </div>
            <NavLink
              to="/Shop"
              className= {({ isActive }) => (isActive ? activeLink : normalLink)}
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
        <div className="md:order-3 flex text-white">
          <button
            type="button"
            onClick={() => {
              setIsShowing((isShowing) => !isShowing);
            }}
            className=" md:mr-0 relative z-10 mx-5 mr-3 px-5 py-2.5 text-6xl"
          >
            <HiOutlineShoppingBag className="hover:text-pink-600" />
            <span className="absolute top-12 rounded-full border-4 border-white bg-pink-600 px-2 text-center text-lg font-semibold">
              {totalQuantities}
            </span>
          </button>
          {setIsShowing && <Cart />}
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
