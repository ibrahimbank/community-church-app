import React from "react";

function Header() {
  return (
    <header className="flex flex-col h-full justify-start px-24 py-32 bg-hero-pattern bg-top bg-cover bg-no-repeat text-[#fff]">
      <h6 className="mb-4">WELCOME TO OUR CHURCH</h6>
      <h1 className="flex w-1/2 flex-wrap font-bold text-5xl pt-5 mb-8 justify-start h-40">
        BECOME A PART OF <span> OUR COMMUNITY</span>
      </h1>
      <button className="bg-[#ffd2a4] w-52 h-14 mb-16 rounded-xl leading-4 text-[#1C1D28]">
        LEARN MORE
      </button>
      <p className="w-80 h-12 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
    </header>
  );
}

export default Header;
