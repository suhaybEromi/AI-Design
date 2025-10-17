import { FaUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";

export default function BlogCard({
  firstSkill,
  secondSkill,
  title,
  username,
  img,
  date,
}) {
  return (
    <div className="gap-10 text-white">
      <div>
        <img
          src={img}
          alt={title}
          className="h-48 w-96 hover:scale-105 transition-transform duration-500"
        />

        <button className="cursor-pointer rounded-full border-1 border-purple-950 w-25 mt-4 mr-3 p-1">
          {firstSkill}
        </button>

        <button className="cursor-pointer rounded-full border-1 border-purple-950 w-37 mt-4 p-1">
          {secondSkill}
        </button>

        <h1 className="text-white font-poppins text-[18px] md:text-[20px] font-semibold mt-3 mb-3">
          {title}
        </h1>

        <p className="text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's.
        </p>

        <div className="flex">
          <button className="cursor-pointer mt-6 flex items-center">
            <FaUser className="mr-2" />
            {username}
          </button>
          <button className="cursor-pointer mt-6 flex items-center ms-5">
            <IoCalendarOutline className="mr-2" />
            {date}
          </button>
        </div>
      </div>
    </div>
  );
}
