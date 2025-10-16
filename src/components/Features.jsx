import iconOne from "../assets/icon-one.svg";
import iconTwo from "../assets/icon-two.svg";
import iconThree from "../assets/icon-three.svg";
import iconFour from "../assets/icon-four.svg";
import iconFive from "../assets/icon-five.svg";
import iconSix from "../assets/icon-six.svg";
import iconSeven from "../assets/icon-seven.svg";
import bigIcon from "../assets/big-icon.svg";
import { FaArrowRight } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

{
  /* Stop Responsive code 150 */
}

export default function Features() {
  return (
    <section id="features" className="my-30 text-center">
      <div>
        <button
          className="mx-auto rounded-full border-2 border-purple-900 border-b-transparent
        hover:border-2 hover:shadow-sm hover:border-purple-900 hover:shadow-purple-900 p-2 w-60
        cursor-pointer transition-all text-purple-300 hover:text-white flex items-center justify-center"
        >
          <BsStars className="w-5 h-5 mr-1" />
          Some of Main Features
        </button>
      </div>

      <div>
        <h1 className="text-[26px] sm:text-[50px] font-poppins font-bold leading-snug text-white mt-10">
          Key Features of Our Tool
        </h1>

        <h1 className="text-[16px] font-poppins text-gray-400 mt-4 sm:mt-7">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities,
          <p>
            making the writing process more efficient, accurate, and enjoyable.
          </p>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-10 max-w-6xl md:max-w-2xl lg:max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div
          className="col-span-1 border-0 lg:border lg:border-purple-950 lg:border-t-0 lg:border-l-0 p-15 w-100 
        hover:bg-linear-to-br from-slate-900 to-purple-950"
        >
          <img
            src={iconOne}
            alt="icon-one"
            className="mx-auto w-20 border-white rounded-full p-5 bg-linear-to-bl from-indigo-800 to-gray-900"
          />
          <h1 className="text-white font-semibold mt-4 mb-3">
            Intelligent Writing Assistance
          </h1>
          <p className="text-gray-400">
            Our AI writing tool analyzes your content, suggests improvements,
          </p>
        </div>

        <div
          className="col-span-1 border-0 lg:border lg:border-purple-950 lg:border-t-0 lg:border-l-0 p-15 w-93 
        hover:bg-linear-to-br from-slate-900 to-purple-950"
        >
          <img
            src={iconTwo}
            alt="icon-two"
            className="mx-auto w-20 border-white rounded-full p-5 bg-linear-to-bl from-indigo-800 to-gray-900"
          />
          <h1 className="text-white font-semibold mt-4 mb-3">
            Grammar and Spell Check
          </h1>
          <p className="text-gray-400">
            Say goodbye to embarrassing typos and grammar mistakes
          </p>
        </div>

        <div
          className="col-span-1 border-0 lg:border lg:border-purple-950 lg:border-t-0 lg:border-l-0 lg:border-r-0 p-15 w-100 
        hover:bg-linear-to-br from-slate-900 to-purple-950"
        >
          <img
            src={iconThree}
            alt="icon-three"
            className="mx-auto w-20 border-white rounded-full p-5 bg-linear-to-bl from-indigo-800 to-gray-900"
          />
          <h1 className="text-white font-semibold mt-4 mb-3">
            Plagiarism Detection
          </h1>
          <p className="text-gray-400">
            Originality is key, and our AI writing tool helps you maintain it
          </p>
        </div>

        {/* Feature 2 */}
        <div
          className="col-span-1 border-0 lg:border lg:border-t-0 lg:border-b-0 lg:border-l-0 border-purple-950 p-15 w-100 
        hover:bg-linear-to-br from-slate-900 to-purple-950"
        >
          <img
            src={iconFour}
            alt="icon-four"
            className="mx-auto w-20 border-white rounded-full p-5 bg-linear-to-bl from-indigo-800 to-gray-900"
          />
          <h1 className="text-white font-semibold mt-4 mb-3">
            Voice to Text Conversion
          </h1>
          <p className="text-gray-400">
            Transform your spoken words into written text easily & effortlessly
          </p>
        </div>

        <div
          className="col-span-1 border-0 lg:border lg:border-t-0 lg:border-b-0 lg:border-l-0 border-purple-950 p-15 w-93 
        hover:bg-linear-to-br from-slate-900 to-purple-950"
        >
          <img
            src={iconFive}
            alt="icon-five"
            className="mx-auto w-20 border-white rounded-full p-5 bg-linear-to-bl from-indigo-800 to-gray-900"
          />
          <h1 className="text-white font-semibold mt-4 mb-3">
            Style and Tone Adaptation
          </h1>
          <p className="text-gray-400">
            Whether you need a professional, or positive tone it has everyone
          </p>
        </div>

        <div
          className="col-span-1 border-0 lg:border lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r-0 border-purple-950 p-15 w-100
        hover:bg-linear-to-br from-slate-900 to-purple-950"
        >
          <img
            src={iconSix}
            alt="icon-six"
            className="mx-auto w-20 border-white rounded-full p-5 bg-linear-to-bl from-indigo-800 to-gray-900"
          />
          <h1 className="text-white font-semibold mt-4 mb-3">
            Content Generation
          </h1>
          <p className="text-gray-400">
            Need inspiration or assistance with generating content?
          </p>
        </div>
      </div>

      {/* Stop Responsive */}
      <div className="grid grid-cols-2 border border-violet-950 mx-auto w-300 rounded-3xl mt-30 p-10">
        <div className="col-span-1 my-auto text-left">
          <p
            className="text-center rounded-full border-t-2 border-l-2 border-r-2 border-b-2 border-purple-950 border-b-transparent
        hover:border-2 hover:shadow-sm hover:border-purple-900 hover:shadow-purple-900 p-2 w-60
         transition-all text-purple-300 hover:text-white flex items-center justify-center"
          >
            <BsStars className="w-5 h-5 mr-1" />
            AI-Powered Writing Tool
          </p>
          <h1 className="text-white font-poppins text-3xl font-semibold mt-4 mb-2">
            Intelligent Writing Assistance
          </h1>
          <p className="text-gray-400">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process...
          </p>

          <button
            className="mt-4 rounded-4xl border-t-2 border-l-2 border-r-2 border-b-2 border-purple-950
            hover:border-2 hover:shadow-sm p-2 w-40
            cursor-pointer transition-all text-purple-300 hover:text-white flex items-center justify-center"
          >
            Learn more
            <FaArrowRight className="ms-2 w-4 h-4" />
          </button>
        </div>

        <div className="col-span-1">
          <img src={bigIcon} alt="big-icon" className="w-100 ms-20" />
        </div>
      </div>

      <div className="grid grid-cols-2 mx-auto w-300 mt-5">
        <div className="col-span-1 p-13 w-170 border border-violet-950 rounded-3xl">
          <img
            src={iconFive}
            alt="icon-five"
            className="w-20 border-white rounded-full p-5 bg-linear-to-bl from-indigo-950 to-gray-800"
          />

          <h1 className="text-white font-poppins text-xl text-start font-semibold mt-15 mb-2">
            Empowering Writing Excellence
          </h1>
          <p className="text-gray-400 text-start">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process...
          </p>
        </div>

        <div className="col-span-1 ms-30 p-13 w-120 border border-violet-950 rounded-3xl">
          <img
            src={iconSeven}
            alt="icon-seven"
            className="w-20 border-white rounded-full p-5 bg-linear-to-bl from-indigo-950 to-gray-800"
          />

          <h1 className="text-white font-poppins text-xl text-start font-semibold mt-15 mb-2">
            Grammar and Spell Check
          </h1>
          <p className="text-gray-400 text-start">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}
