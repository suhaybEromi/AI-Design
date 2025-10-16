import priceIconTwo from "../assets/pricing-icon-two.svg";
import priceIconThree from "../assets/pricing-icon-three.svg";
import priceIconFour from "../assets/pricing-icon-four.svg";
import { BsStars } from "react-icons/bs";
import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <section id="pricing" className="my-30">
      <div className="flex flex-col items-center justify-center">
        <p
          className="text-center rounded-full border-2 border-purple-950
            hover:border-2 hover:shadow-sm hover:shadow-purple-900 p-2 w-40
            transition-all text-purple-300 hover:text-white flex items-center justify-center"
        >
          <BsStars className="w-5 h-5 mr-1" />
          Get access
        </p>
        <h1 className="text-[30px] md:text-[50px] font-poppins font-bold leading-snug text-white mt-7">
          Our Pricing Plan
        </h1>
        <p className="text-[16px] text-center font-poppins text-gray-400 mt-3">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making
          {/* Block is useful for bringing down another text instead <br /> */}
          <span className="md:block mt-1">
            the writing process more efficient, accurate, and enjoyable.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-3 justify-items-center mx-auto w-full max-w-[1000px] gap-y-10 lg:gap-x-6 xl:gap-x-50 mt-20">
        <div className="col-span-3 md:col-span-1 lg:col-span-1 md:ms-35 lg:ms-0">
          <PriceCard title={"Starter"} price={"$10"} img={priceIconTwo} />
        </div>

        <div className="col-span-3 md:col-span-1 lg:col-span-1 md:ms-94 lg:ms-0">
          <PriceCard title={"Medium"} price={"$59"} img={priceIconThree} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <PriceCard title={"Business"} price={"$289"} img={priceIconFour} />
        </div>
      </div>
    </section>
  );
}
