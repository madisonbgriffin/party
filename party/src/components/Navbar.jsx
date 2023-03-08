import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { HiOutlineSearch, HiSearch } from "react-icons/hi"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { NavLink, Link } from "react-router-dom"

import { Popover } from "@headlessui/react"

import { Cart, NavbarSearch } from "."
import { partylogo } from "../assets"
import { useStateContext } from "../context/StateContext"

// Navbar styling classes
const activeLink =
  "relative z-10 mx-5 text-2xl underline decoration-pink-600 decoration-4 underline-offset-8"
const normalLink =
  "relative z-10 mx-5 text-2xl decoration-pink-600 decoration-4 underline-offset-8 hover:underline"

// search bar styling classes
const activeSearch = "relative z-10 mx-5 text-2xl text-pink-600"
const normalSearch = "relative z-10 mx-5 text-2xl hover:text-pink-600"

const Navbar = () => {
  const { totalQuantities, setQuery, setIsShowing } = useStateContext()
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="flex w-full flex-wrap items-center justify-between p-4">
        {/* logo */}
        <div className="pt-2">
          <Link to="/">
            <img
              src={partylogo}
              alt="Logo"
              className="relative z-10 mr-3 h-20"
            />
          </Link>
        </div>
        <FiMenu
          className="relative z-10 block h-8 w-8 cursor-pointer text-white lg:hidden"
          onClick={() => setOpen(!open)}
        ></FiMenu>
        {/* links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full items-end text-white lg:flex lg:w-auto lg:items-center`}
        >
          <div className="flex flex-col items-end lg:flex-row lg:justify-between lg:text-xl">
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
              className="relative my-auto flex text-left"
              onClick={() => {
                setQuery("")
              }}
            >
              <Popover.Button
                className={({ open }) => (open ? activeSearch : normalSearch)}
              >
                <HiOutlineSearch />
              </Popover.Button>
              <Popover.Panel className="absolute right-0 z-20 mt-10 w-72 origin-top-right rounded-md bg-white">
                <NavbarSearch />
              </Popover.Panel>
            </Popover>
            <div className="flex text-white lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setIsShowing((isShowing) => !isShowing)
                }}
                className="relative z-10 mx-5 px-5 py-2.5 text-6xl"
              >
                <HiOutlineShoppingBag className="hover:text-pink-600" />
                <span className="absolute top-12 rounded-full border-4 border-white bg-pink-600 px-2 text-center text-xs font-semibold">
                  {totalQuantities}
                </span>
              </button>
              {setIsShowing && <Cart />}
            </div>
          </div>
        </div>

        {/*shopping cart */}
        <div className="hidden text-white lg:flex">
          <button
            type="button"
            onClick={() => {
              setIsShowing((isShowing) => !isShowing)
            }}
            className="relative z-10 mx-5 px-5 py-2.5 text-6xl"
          >
            <HiOutlineShoppingBag className="hover:text-pink-600" />
            <span className="absolute top-12 rounded-full border-4 border-white bg-pink-600 px-2 text-center text-lg font-semibold">
              {totalQuantities}
            </span>
          </button>
          {setIsShowing && <Cart />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

//TODO: edit styling and responsiveness
//TODO: add cart interaction
//? confetti on click effect?
//? logo change?
