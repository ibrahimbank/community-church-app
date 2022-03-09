import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-[#0D0D0D] px-15  gap-8 h-20 divide-x-2">
      <Link to="/" className="flex-none">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="flex-auto text-[#fff] flex justify-between p-3 text-base h-20 items-center ">
        <div className="flex justify-start w-9/12 p-2 gap-8 text-base not-italic font-normal opacity-90">
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/about-us/">ABOUT US</Link>
          </li>

          <li>
            <Link to="/sermon">SERMON</Link>
          </li>

          <li>
            <Link to="/blog">BLOG</Link>
          </li>
        </div>

        <Link
          to="contact-us"
          className="btn bg-[#ffd2a4] w-40 h-14 rounded-xl leading-4 text-[#1C1D28] p-4 text-center items-center justify-center "
        >
          CONTACT US
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
