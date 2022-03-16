import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col h-full justify-center items-center md:items-start  md:justify-start md:px-24 py-32 bg-hero-pattern bg-top bg-cover bg-no-repeat text-[#fff] mt-20">
      <h6 className="mb-4 ">WELCOME TO OUR CHURCH</h6>
      <h1 className="flex w-full md:w-1/2 flex-wrap font-bold text-4xl md:text-5xl pt-5 mb-8 md:justify-start justify-center text-center md:text-justify  h-40">
        BECOME A PART OF <span> OUR COMMUNITY</span>
      </h1>
      <Link to="/about-us">
        <button className="btn bg-[#ffd2a4] w-52 h-14 mb-16 rounded-xl leading-4 text-[#1C1D28]">
          LEARN MORE
        </button>
      </Link>

      <p className="w-80 h-12 text-base text-center md:text-justify ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
    </header>
  );
}

export default Header;
