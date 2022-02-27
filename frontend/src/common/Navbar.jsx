import React from "react";
import Logo from "../images/Logo.svg";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center bg-[#0D0D0D] px-15  gap-8 h-20 divide-x-2">
      <div className="flex-none">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="flex-auto text-[#fff] flex justify-between p-3 text-base h-20 items-center">
        <div className="flex justify-start w-9/12 p-2 gap-8 text-base not-italic font-normal opacity-90">
          <Link to="/" className=" cursor-pointer ">
            HOME
          </Link>

          <Link to="/about-us" className=" cursor-pointer ">
            ABOUT US
          </Link>

          <Link to="/sermon" className=" cursor-pointer ">
            SERMON
          </Link>

          <Link to="blog" className=" cursor-pointer ">
            BLOG
          </Link>
        </div>

        <button
          className="bg-[#ffd2a4] w-44 h-14 rounded-xl leading-4 text-[#1C1D28] "
          onClick={() => navigate("/contact-us")}
        >
          CONTACT US
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
