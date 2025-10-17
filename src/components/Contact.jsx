import { BsStars } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Contact() {
  return (
    <section id="contact">
      <div className="flex flex-col border-3 border-b-1 border-violet-950 rounded-lg w-75 md:w-185 lg:w-250 mx-auto items-center justify-center mt-20">
        <p
          className="my-12 items-center text-center rounded-full border-2 border-violet-950
            hover:border-2 hover:shadow-sm hover:shadow-purple-900 p-2 w-45
            transition-all text-purple-300 hover:text-white flex justify-center"
        >
          <BsStars className="w-5 h-5 mr-1" />
          Need Any Help?
        </p>
        <h1 className="text-[30px] md:text-[50px] font-poppins font-bold leading-snug text-white">
          Contact With Us
        </h1>
        <p className="text-[13px] md:text-[16px] font-poppins text-center text-gray-400 mt-1">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making
          <span className="block mt-1">
            the writing process more efficient, accurate, and enjoyable.
          </span>
        </p>

        <div className="grid grid-cols-2 gap-5 w-67 md:w-170 lg:w-225 items-center mx-auto border-3 border-b-1 rounded-lg border-violet-950 my-15 p-8">
          <div className="col-span-2 md:col-span-1 mx-auto -ms-5 sm:ms-5 md:-ms-2 lg:ms-8">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <br />
            <input
              type="text"
              className="border border-violet-950 text-white mt-2 w-60 md:w-75 p-2 rounded-md"
              placeholder="Enter your Name"
            />
          </div>

          <div className="col-span-2 md:col-span-1 mx-auto -ms-5 sm:ms-5 md:-ms-1 lg:ms-7">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <br />
            <input
              type="email"
              className="border border-violet-950 text-white mt-2 w-60 md:w-75 p-2 rounded-md"
              placeholder="Enter your Email"
            />
          </div>

          <div className="col-span-2 mx-auto mt-3 -ms-5 sm:ms-5 md:-ms-2 lg:ms-8">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <br />
            <textarea
              name="message"
              placeholder="Type your message"
              rows={5}
              className="border border-violet-950 text-white text-start mt-2 p-4 w-60 md:w-154 lg:w-180 rounded-md"
            ></textarea>
          </div>
          <div className="col-span-2 mx-auto">
            <button className="cursor-pointer text-white bg-[#565ecac9] w-35 md:w-45 p-2 rounded-lg text-[15px] md:text-[20px] font-semibold hover:opacity-75 transition-all">
              <Link to="/">Send Message</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
