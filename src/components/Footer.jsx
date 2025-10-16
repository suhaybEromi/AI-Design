import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section id="footer">
      <div className="grid grid-cols-4 mx-auto w-300">
        <div className="col-span-2 my-40 text-white items-center">
          <img src={logo} alt="Logo" width={120} />
          <p className="mt-4 text-lg text-gray-400 ms-5">
            AI writing tool is designed to empower you with exceptional <br />
            writing capabilities.
          </p>
          <div className="flex space-x-4 mt-8 ms-5 text-2xl text-gray-400 cursor-pointer">
            <Link to="#">
              <FaLinkedin className="hover:text-blue-500 transition duration-300" />
            </Link>

            <Link to="#">
              <FaGithub className="hover:text-white transition duration-300" />
            </Link>

            <Link to="#">
              <FaInstagram className="hover:text-pink-800 transition duration-300" />
            </Link>
          </div>
        </div>

        <div className="col-span-2 my-40 text-white mt-48 text-xl flex space-x-30">
          <ul>
            <li className="font-semibold mb-8">Products</li>
            <li className="text-gray-400 mb-2 hover:text-white">
              Integrations
            </li>
            <li className="text-gray-400 mt-2 mb-2 hover:text-white">
              Pricing
            </li>
            <li className="text-gray-400 hover:text-white">Features</li>
            <li className="text-gray-400 mt-2 mb-2 hover:text-white">
              Changelog
            </li>
            <li className="text-gray-400 hover:text-white">Roadmap</li>
          </ul>

          <ul>
            <li className="font-semibold mb-8">Company</li>
            <li className="text-gray-400 mb-2 hover:text-white">
              Privacy Policy
            </li>
            <li className="text-gray-400 w-30 mt-2 mb-2 hover:text-white">
              Refund Policy
            </li>
            <li className="text-gray-400 mt-2 mb-2 hover:text-white">
              Support
            </li>
            <li className="text-gray-400 hover:text-white">Community</li>
          </ul>

          <ul>
            <li className="font-semibold mb-8">Support</li>
            <li className="text-gray-400 mb-2 hover:text-white">Features</li>
            <li className="text-gray-400 mt-2 mb-2 hover:text-white">
              Integrations
            </li>
            <li className="text-gray-400 hover:text-white">Pricing</li>
            <li className="text-gray-400 mt-2 mb-2 hover:text-white">
              Changelog
            </li>
            <li className="text-gray-400 hover:text-white">Roadmap</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
