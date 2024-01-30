// src/components/Card.js
import React from "react";
import { FiCheck } from "react-icons/fi";

const Card = ({
  price,
  powerPlan,
  datatype,
  dataAmount,
  minutes,
  minutesType,
  perks = [],
  offer,
  isPopular,
}) => {
  return (
    <>
      <div className=" mx-3 mb-16  bg-gradient-to-t from-CardBlue to-CardPink rounded-xl  pl-2  md:w-80 xsm:w-52 z-10 relative hover:translate-y-[-14px] transition-all duration-500 ">
        <div className="bg-white w-full h-full py-2  flex flex-col border-l-0  rounded-r-lg   border-2 px-3">
          <p className=" text-CardPink">You Pay</p>
          <h2 className=" font-bold   text-CardPink text-xl  ">
            AED {price} /month
          </h2>
          <p className="text-gray-700 mb-2">For 12 months + 5% VAT</p>
          <hr />
          <p className="mt-2 text-CardBlue">You Get</p>
          <h2 className="mb-2 font-bold text-xl text-CardBlue">
            Power Plan {powerPlan}
          </h2>
          <hr />
          <div className="flex items-center gap-4 mt-2 mb-2 ">
            <h2 className=" font-bold text-xl">{dataAmount} </h2>
            <p> {datatype}</p>
          </div>
          <div className="mb-2  items-center  flex gap-4">
            <h2 className="font-bold text-xl">{minutes}</h2>
            <p>{minutesType}</p>
          </div>
          <hr />
          <ul className="mt-4 flex-1 min-h-64 flex flex-col   gap-2 ">
            {perks?.map((item, index) => (
              <li className="flex items-center mb-2 " key={index}>
                <div className="flex items-center gap-1">
                  <FiCheck /> {item}
                </div>
              </li>
            ))}
          </ul>
          <hr />
          {/* if offer exists in database */}
          {offer && (
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-white w-fit rounded-xl px-2 bg-gradient-to-r from-CardDarkBlue to-CardPink">
                Limited time offer
              </p>
              <p>
                <span className="font-bold">The Entertainer</span> on us for 12
                months
              </p>
            </div>
          )}

          <hr />
          <div className="flex w-full items-center">
            <a className=" underline" href="#">
              What you get
            </a>
            <button className=" hover:bg-CardPink transition-all duration-300 hover:text-white m-4 px-6 flex-1 py-2 border-2 rounded-lg text-CardPink font-semibold ">
              Select
            </button>
          </div>
          {/* if Popular exists in database */}
          {isPopular && (
            <div className=" absolute top-[-34px] bg-blue-950 py-2 px-8 font-bold  rounded-lg text-white z-[-3]">
              Most Popular
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
