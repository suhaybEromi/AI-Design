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
        <h1 className="text-[50px] font-poppins font-bold leading-snug text-white">
          Latest Blogs & News
        </h1>
        <span className="text-[16px] font-poppins text-gray-400 mt-1">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making <br />
          <p className="text-center mt-1">
            the writing process more efficient, accurate, and enjoyable.
          </p>
        </span>
      </div>

      <div className="grid grid-cols-3 gap-15 w-300 mx-auto text-white">
        <BlogCard
          firstSkill="Design"
          secondSkill="Engineering"
          title="Revolution in Content Creation and Communication"
          username="Alex Demo"
          date="25 Mar, 2025"
          img={blogFirst}
        />

        <BlogCard
          firstSkill="Security"
          secondSkill="Development"
          title="How AI Writing Tools Empower Writers to Speed up there Writing"
          username="Hendary Jonson"
          date="12 Feb, 2025"
          img={blogTwo}
        />
        <BlogCard
          firstSkill="Products"
          secondSkill="Blog and articles"
          title="Revolution in Content Creation and Communication"
          username="Piter Mecraow"
          date="10 Jan, 2025"
          img={blogThree}
        />
      </div>
    </section>
  );
}
