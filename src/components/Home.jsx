import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";

export default function Home() {
  return (
    <section id="home">
      <div className="text-center text-white mt-15">
        <button
          className="mx-auto rounded-full border-2 border-purple-900 border-b-transparent
          hover:border-2 hover:shadow-sm hover:border-purple-900 hover:shadow-purple-900 p-2 w-75 sm:w-80
          cursor-pointer transition-all text-purple-300 hover:text-white flex items-center justify-center"
        >
          <BsStars className="w-5 h-5 mr-1" />
          Your Ultimate Creative Companion!
        </button>

        <div className="mt-10 mb-4 sm:mb-8">
          <h1 className="text-[21px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-poppins font-bold leading-snug">
            Elevate Your Content with Our
            <p className="-mt-1 sm:-mt-3">AI-Powered Writing Tool</p>
          </h1>
        </div>

        <div>
          <h1 className="text-[12px] sm:text-[18px] font-poppins text-gray-400">
            Highly customizable Tailwind CSS template for AI - Tool,
            <p>Startup, Software, App and Product Sites. Comes with </p>
            <p>everything you need - pages, features, sections,</p>
            <p>components and more that you can easily customize.</p>
            and more that you can easily customize.
          </h1>
        </div>

        <div className="mt-8">
          <button className="bg-indigo-900 w-34 sm:w-60 p-3 rounded-lg text-[12px] sm:text-[20px] font-semibold hover:opacity-75 transition-all">
            <Link to="/">Start Your Free Trial</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
