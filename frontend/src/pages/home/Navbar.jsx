import React from "react";
import Logo from "../../images/Logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#0D0D0D] px-15  gap-8 h-20 divide-x-2">
      <div className="flex-none">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="flex-auto text-[#fff] flex justify-between p-3 text-base h-20 items-center">
        <div className="flex justify-start w-9/12 p-2 gap-8 text-base not-italic font-normal opacity-90">
          <a href="/home">
            <li>HOME</li>
          </a>
          <a href="/about-us">
            <li>ABOUT US</li>
          </a>
          <a href="/sermon">
            <li>SERMON</li>
          </a>
          <a href="/blog">
            <li>BLOG</li>
          </a>
        </div>

        <button className="bg-[#ffd2a4] w-44 h-14 rounded-xl leading-4 text-[#1C1D28]">
          CONTACT US
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
