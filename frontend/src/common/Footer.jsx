import Logo from "../images/footerLogo.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer flex bg-[#161722] py-16 px-24 justify-between text-[#ffff]">
      <div className="mr-64 ">
        <img src={Logo} alt="logo" className="mb-4 " />
        <p className="mb-8">© Copyright Finsweet 2022</p>
        <p className="mb-4">(480) 555-0103</p>
        <p className="mb-4">4517 Washington Ave.</p>
        <p className="mb-4">finsweet@example.com</p>
      </div>
      <ul className="">
        <h6 className="mb-5">Quicklinks</h6>
        <a href="/" className="">
          <li className="">ABOUT US</li>
        </a>
        <a href="/" className="">
          <li className="/">SERMON</li>
        </a>
        <a href="/" className="">
          <li className="">EVENTS</li>
        </a>
        <a href="/" className="">
          <li className="/">BLOG</li>
        </a>
      </ul>
      <div className="">
        <h6 className="mb-6">Connect</h6>
        <div className="flex space-x-6">
          <FaFacebook color="#FFD2A4" />
          <FaTwitter color="#FFD2A4" />
          <FaLinkedin color="#FFD2A4" />
        </div>
      </div>
      <div className="">
        <h5 className="text-xl w-96 mb-8">
          SUBSCRIBE TO GET LATEST UPDATES AND NEWS
        </h5>
        <div className="flex">
          <input
            type="text"
            className="relative sub-input w-96 h-16 rounded-lg px-2  bg-[#161722] border border-solid border-gray-700"
            placeholder="Yourmail@gmail.com"
          />
          <button className="bg-[#FFD2A4] w-48 h-16 rounded-lg text-[#1C1D28] text-base absolute right-24">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
