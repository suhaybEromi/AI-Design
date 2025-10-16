import { BsStars } from "react-icons/bs";
import userOne from "../assets/user-one.png";
import userTwo from "../assets/user-two.png";
import userThree from "../assets/user-three.png";
import userFour from "../assets/user-four.png";
import userFive from "../assets/user-five.png";
import userSix from "../assets/user-six.png";
import UserCard from "./UserCard";
import amazon from "../assets/amazon.svg";
import airbnb from "../assets/airbnb.svg";
import canon from "../assets/canon.svg";
import facebook from "../assets/facebook.svg";
import tinder from "../assets/tinder.svg";

export default function CustomerComments() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <p
          className="text-center rounded-full border-2 border-purple-950
            hover:border-2 hover:shadow-sm hover:shadow-purple-900 p-2 w-40
            transition-all text-purple-300 hover:text-white flex items-center justify-center"
        >
          <BsStars className="w-5 h-5 mr-1" />
          Wall of love
        </p>
        <h1 className="text-[50px] font-poppins font-bold leading-snug text-white mt-7">
          What Our User Says
        </h1>
        <span className="text-[16px] font-poppins text-gray-400 mt-4">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making <br />
          <p className="text-center mt-1">
            the writing process more efficient, accurate, and enjoyable.
          </p>
        </span>
      </div>

      <div className="grid grid-cols-3 mx-auto w-320 gap-x-15 gap-y-10 mt-20">
        <UserCard username="Machel Pildium" lastname="@machel" img={userOne} />
        <UserCard username="Wilson Bator" lastname="@wilson" img={userSix} />
        <UserCard username="Zain Franci" lastname="@zain" img={userTwo} />
        <UserCard username="Roger George" lastname="@roger" img={userFour} />
        <UserCard username="Dulce Rosser" lastname="@dulce" img={userThree} />
        <UserCard
          username="Cristofer Carder"
          lastname="@cristofer"
          img={userFive}
        />
      </div>
      <div className="relative overflow-hidden mt-20">
        <div className="flex gap-20 animate-marquee">
          <img src={amazon} alt="amazon" className="mt-4" />
          <img src={airbnb} alt="airbnb" />
          <img src={canon} alt="canon" />
          <img src={facebook} alt="facebook" />
          <img src={tinder} alt="tinder" />
        </div>
      </div>
    </section>
  );
}
