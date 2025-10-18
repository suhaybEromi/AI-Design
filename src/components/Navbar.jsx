import { useState } from "react";
import logo from "../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";

const headerMenu = ["Home", "Features", "Pricing", "Contact", "Blog"];
const menuStyle =
  "text-lg text-white hover:text-indigo-400 p-2 hover:transition";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-3 mx-5 p-3 items-center relative">
      {/* Logo */}
      <div className="flex items-center col-span-1 lg:col-span-1">
        <img src={logo} alt="logo" width={125} />
      </div>

      {/* Mobile toggle button */}
      <div className="flex justify-end col-span-2 lg:hidden">
        <button onClick={toggleMenu} className="cursor-pointer text-white">
          {isOpen ? "" : <RiMenu3Line size={23} />}
        </button>
      </div>

      {/* Laptop menu */}
      <div className="text-center col-span-1 hidden lg:flex">
        <ul className="flex justify-center lg:-ms-23 xl:-ms-0 lg:gap-8 xl:gap-15">
          {headerMenu.map((item, index) => (
            <li key={index} className={menuStyle}>
              <Link
                className="cursor-pointer"
                to={item.toLowerCase()}
                smooth={true}
                duration={700}
                offset={-50}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" justify-end gap-3 col-span-1 hidden lg:flex">
        <button className="cursor-pointer p-1 rounded-lg w-24 text-white hover:bg-indigo-900 hover:text-white hover:transition">
          Signin
        </button>
        <button className="cursor-pointer bg-indigo-800 p-1 rounded-lg w-24 text-white">
          Signup
        </button>
      </div>

      {/* Mobile menu - top dropdown */}
      <div
        className={`fixed top-0 left-0 w-full shadow-2xl p-8 flex flex-col items-center space-y-6 z-50 lg:hidden
     backdrop-blur-md  transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <button
          onClick={toggleMenu}
          className="self-end text-white text-3xl mb-4"
        >
          <RiCloseLine />
        </button>

        {headerMenu.map((item, index) => (
          <Link
            key={index}
            to={item}
            smooth={true}
            duration={700}
            offset={-50}
            onClick={toggleMenu}
            className="text-xl text-white hover:text-indigo-400 p-2 hover:transition block cursor-pointer"
          >
            {item}
          </Link>
        ))}
        <div className="flex justify-end gap-3 col-span-1 lg:hidden">
          <button className="cursor-pointer p-1 rounded-lg w-24 text-white hover:bg-indigo-900 hover:text-white hover:transition">
            Signin
          </button>
          <button className="cursor-pointer bg-indigo-800 p-1 rounded-lg w-24 text-white">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
