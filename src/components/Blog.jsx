import { BsStars } from "react-icons/bs";
import blogFirst from "../assets/blog-first.png";
import blogTwo from "../assets/blog-two.png";
import blogThree from "../assets/blog-three.png";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <section id="blog">
      <div className="mt-30 mb-15 flex flex-col mx-auto justify-center items-center">
        <p
          className="mb-8 text-center rounded-full border-2 border-purple-950
            hover:border-2 hover:shadow-sm hover:shadow-purple-900 p-2 w-55
            transition-all text-purple-300 hover:text-white flex items-center justify-center"
        >
          <BsStars className="w-5 h-5 mr-1" />
          Read Our Latest Blogs
        </p>
        <h1 className="text-[30px] md:text-[50px] font-poppins font-bold leading-snug text-white">
          Latest Blogs & News
        </h1>
        <p className="text-[14px] md:text-[16px] font-poppins text-center text-gray-400 mt-1">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making
          <span className="block">
            the writing process more efficient, accurate, and enjoyable.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-6 gap-6 w-75 md:w-175 lg:w-250 xl:w-300 mx-auto text-white">
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <BlogCard
            firstSkill="Design"
            secondSkill="Engineering"
            title="Revolution in Content Creation and Communication"
            username="Alex Demo"
            date="25 Mar, 2025"
            img={blogFirst}
          />
        </div>

        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <BlogCard
            firstSkill="Security"
            secondSkill="Development"
            title="How AI Writing Tools Empower Writers to Speed up there Writing"
            username="Hendary Jonson"
            date="12 Feb, 2025"
            img={blogTwo}
          />
        </div>

        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <BlogCard
            firstSkill="Products"
            secondSkill="Blog and articles"
            title="Revolution in Content Creation and Communication"
            username="Piter Mecraow"
            date="10 Jan, 2025"
            img={blogThree}
          />
        </div>
      </div>
    </section>
  );
}
