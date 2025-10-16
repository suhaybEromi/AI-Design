import logo from "../assets/logo.png";

import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 mx-5 p-3 items-center">
      <div className="flex items-center col-start-1">
        <img src={logo} alt="logo" width={125} />
      </div>

      <div className="text-center col-span-1">
        <ul className="flex justify-center gap-15">
          <li className="text-lg text-white hover:text-indigo-400 p-2 hover:transition">
            <Link
              className="cursor-pointer"
              to="home"
              smooth={true}
              duration={700}
              offset={-50}
            >
              Home
            </Link>
          </li>
          <li className="text-lg text-white hover:text-indigo-400 p-2 hover:transition">
            <Link
              className="cursor-pointer"
              to="features"
              smooth={true}
              duration={700}
              offset={-50}
            >
              Features
            </Link>
          </li>
          <li className="text-lg text-white hover:text-indigo-400 p-2 hover:transition">
            <Link
              className="cursor-pointer"
              to="pricing"
              smooth={true}
              duration={700}
              offset={-50}
            >
              Pricing
            </Link>
          </li>
          <li className="text-lg text-white hover:text-indigo-400 p-2 hover:transition">
            <Link
              className="cursor-pointer"
              to="contact"
              smooth={true}
              duration={700}
              offset={-50}
            >
              Contact
            </Link>
          </li>
          <li className="text-lg text-white hover:text-indigo-400 p-2 hover:transition">
            <Link
              className="cursor-pointer"
              to="blog"
              smooth={true}
              duration={700}
              offset={-50}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-end gap-3 col-span-1">
        <button className="cursor-pointer p-1 rounded-lg w-24 text-white hover:bg-indigo-900 hover:text-white hover:transition">
          Signin
        </button>

        <button className="cursor-pointer bg-indigo-800 p-1 rounded-lg w-24 text-white">
          Signup
        </button>
      </div>
    </div>
  );
}
