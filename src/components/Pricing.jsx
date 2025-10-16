import priceIconTwo from "../assets/pricing-icon-two.svg";
import priceIconThree from "../assets/pricing-icon-three.svg";
import priceIconFour from "../assets/pricing-icon-four.svg";
import { BsStars } from "react-icons/bs";
import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <section id="pricing" className="my-50">
      <div className="flex flex-col items-center justify-center">
        <p
          className="text-center rounded-full border-2 border-purple-950
            hover:border-2 hover:shadow-sm hover:shadow-purple-900 p-2 w-40
            transition-all text-purple-300 hover:text-white flex items-center justify-center"
        >
          <BsStars className="w-5 h-5 mr-1" />
          Get access
        </p>
        <h1 className="text-[50px] font-poppins font-bold leading-snug text-white mt-7">
          Our Pricing Plan
        </h1>
        <span className="text-[16px] font-poppins text-gray-400 mt-4">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making <br />
          <p className="text-center mt-1">
            the writing process more efficient, accurate, and enjoyable.
          </p>
        </span>
      </div>

      <div className="grid grid-cols-3 mx-auto w-310 gap-x-10 mt-20">
        <PriceCard title={"Starter"} price={"$10"} img={priceIconTwo} />
        <PriceCard title={"Medium"} price={"$59"} img={priceIconThree} />
        <PriceCard title={"Business"} price={"$289"} img={priceIconFour} />
      </div>
    </section>
  );
}
