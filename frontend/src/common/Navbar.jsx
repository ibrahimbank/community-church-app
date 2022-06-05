import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const onClick = () => {
    if (showMenu === false) setShowMenu(true);
    else setShowMenu(false);
  };

  return (
    <nav className="fixed doo top-0 left-0 right-0 z-10 flex justify-between w-full items-center bg-[#0D0D0D] px-15  gap-8 h-20 md:divide-x-2">
      <Link to="/" className="flex-none">
        <img src={Logo} alt="logo" />
      </Link>

      <FaBars
        color="#ffff"
        size={30}
        className="menu md:hidden cursor-pointer"
        onClick={onClick}
      />
      <ul
        className={
          showMenu === false
            ? "hidden flex doo flex-auto text-[#fff]  p-3 text-base h-20 flex-col items-center  justify-center z-10 absolute top-0 left-0 w-full  h-screen md:relative bg-[#000] md:flex md:flex-row  md:justify-between md:items-center  md:bg-inherit md:z-0 md:h-full"
            : " flex doo flex-auto text-[#fff]  p-3 text-base h-20 flex-col items-center  justify-center z-10 absolute top-0 left-0 w-full  h-screen md:relative bg-[#000] md:flex md:flex-row  md:justify-between md:items-center  md:bg-inherit md:z-0 md:h-full"
        }
      >
        <div className="flex md:flex doo flex-col justify-center items-center md:flex-row md:justify-start w-9/12 p-2 gap-8 text-base not-italic font-normal opacity-90">
          <FaTimes
            className="md:hidden absolute cursor-pointer top-0 right-0 mr-2 flex"
            color="#ffff"
            size={30}
            onClick={onClick}
          />
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
