import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section id="footer" className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* --- LOGO SECTION --- */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-start">
            <img src={logo} alt="Logo" width={120} />
            <p className="mt-4 text-lg text-gray-400">
              AI writing tool is designed to empower you with exceptional
              writing capabilities.
            </p>
            <div className="flex space-x-4 mt-6 text-2xl text-gray-400 cursor-pointer">
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

          {/* --- UL SECTIONS WRAPPER --- */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col md:flex-row md:justify-between md:space-x-8">
            {/* Products */}
            <ul className="mt-10 md:mt-0 lg:mt-7">
              <li className="font-semibold mb-4 text-xl">Products</li>
              <li className="text-gray-400 mb-2 hover:text-white">
                Integrations
              </li>
              <li className="text-gray-400 mb-2 hover:text-white">Pricing</li>
              <li className="text-gray-400 mb-2 hover:text-white">Features</li>
              <li className="text-gray-400 mb-2 hover:text-white">Changelog</li>
              <li className="text-gray-400 hover:text-white">Roadmap</li>
            </ul>

            {/* Company */}
            <ul className="mt-10 md:mt-0 lg:mt-7">
              <li className="font-semibold mb-4 text-xl">Company</li>
              <li className="text-gray-400 mb-2 hover:text-white">
                Privacy Policy
              </li>
              <li className="text-gray-400 mb-2 hover:text-white">
                Refund Policy
              </li>
              <li className="text-gray-400 mb-2 hover:text-white">Support</li>
              <li className="text-gray-400 hover:text-white">Community</li>
            </ul>

            {/* Support */}
            <ul className="mt-10 md:mt-0 lg:mt-7">
              <li className="font-semibold mb-4 text-xl">Support</li>
              <li className="text-gray-400 mb-2 hover:text-white">Features</li>
              <li className="text-gray-400 mb-2 hover:text-white">
                Integrations
              </li>
              <li className="text-gray-400 mb-2 hover:text-white">Pricing</li>
              <li className="text-gray-400 mb-2 hover:text-white">Changelog</li>
              <li className="text-gray-400 hover:text-white">Roadmap</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-center border-t border-gray-700 mt-10 pt-6">
        {/* Left side */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} AI Writer. All rights reserved.
        </div>

        {/* Right side */}
        <div className="text-gray-400 text-sm">
          Designed and developed by{" "}
          <span className="text-white font-medium hover:underline transition">
            <Link
              to="https://suhayb.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suhayb Mohammed
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
