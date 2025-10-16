import { FaArrowRight } from "react-icons/fa";
import priceIconFirst from "../assets/pricing-icon-first.svg";

const listStyle = "flex items-center gap-4";

export default function PriceCard({ title, price, img }) {
  return (
    <div>
      <div className="rounded-2xl border border-violet-950 w-80 md:w-80 lg:w-80 xl:w-95 p-7 bg-linear-to-t from-violet-950 to-slate-950">
        <div className="text-white flex justify-between items-center text-3xl font-semibold">
          {title}
          <img src={img} alt={title} />
        </div>

        <div className="mt-5 flex">
          <h1 className="text-5xl font-semibold bg-linear-to-tr from-purple-400 to-cyan-900 bg-clip-text text-transparent">
            {price}
          </h1>
          <p className="text-white ms-3">
            /month <br /> (billed annually)
          </p>
        </div>
        <hr className="text-white mt-8 w-50 mx-auto brightness-50" />

        <div>
          <ul className="text-gray-400 text-lg space-y-4 mt-7">
            <li className={listStyle}>
              <img
                src={priceIconFirst}
                alt="price icon"
                width={24}
                height={24}
              />
              Subscription with levels
            </li>
            <li className={listStyle}>
              <img
                src={priceIconFirst}
                alt="price icon"
                width={24}
                height={24}
              />
              Advanced features included
            </li>
            <li className={listStyle}>
              <img
                src={priceIconFirst}
                alt="price icon"
                width={24}
                height={24}
              />
              Shared workspaces & tools
            </li>
            <li className={listStyle}>
              <img
                src={priceIconFirst}
                alt="price icon"
                width={24}
                height={24}
              />
              Premium versions functionality
            </li>
            <li className={listStyle}>
              <img
                src={priceIconFirst}
                alt="price icon"
                width={24}
                height={24}
              />
              Customizing the outputs
            </li>
            <li className={listStyle}>
              <img
                src={priceIconFirst}
                alt="price icon"
                width={24}
                height={24}
              />
              Priority customer support
            </li>
          </ul>
        </div>

        <div className="text-white mt-10 flex justify-center">
          <button
            className="cursor-pointer border border-purple-400 rounded-lg bg-linear-to-tr from-violet-900 to-slate-950
            w-70 flex justify-center items-center p-3 hover:bg-linear-to-bl hover:from-violet-900 hover:to-slate-950"
          >
            Get the plan
            <FaArrowRight className="ms-2 w-4 h-4" />
          </button>
        </div>
        <p className="mt-5 text-gray-400 text-center">No extra hidden charge</p>
      </div>
    </div>
  );
}
