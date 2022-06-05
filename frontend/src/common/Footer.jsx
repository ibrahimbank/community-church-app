import Logo from "../images/footerLogo.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer flex items-center justify-center flex-col  sm:grid gap-4 lg:grid-cols-2 xl:flex xl:flex-row bg-[#161722] py-16 px-24 xl:justify-between text-[#ffff]">
      <div className="">
        <img src={Logo} alt="logo" className="mb-4 " />
        <p className="mb-8">© Copyright Finsweet 2022</p>
        <p className="mb-4">(480) 555-0103</p>
        <p className="mb-4">4517 Washington Ave.</p>
        <p className="mb-4">finsweet@example.com</p>
      </div>
      <ul className="">
        <h6 className="mb-5">Quicklinks</h6>

        <li>
          <Link to="/about-us">ABOUT US</Link>
        </li>

        <li>
          <Link to="/sermon">SERMON</Link>
        </li>

        <li>
          <Link to="/sermon-events">EVENTS</Link>
        </li>

        <li>
          <Link to="/blog">BLOG</Link>
        </li>
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
        <h5 className=" text-base w-64 sm:w-96 md:w-96 lg:w-96 mb-8">
          SUBSCRIBE TO GET LATEST UPDATES AND NEWS
        </h5>
        <div className="flex relative btn sub-input w-60 xl:w-96 rounded-lg  bg-[#161722] border border-solid border-gray-700">
          <input
            type="email"
            name="email"
            className=" bg-[#161722] h-full w-3/4"
            placeholder="Yourmail@gmail.com"
          />
          <Link
            to="contact-us"
            className="h-full w-2/5 bg-[#FFD2A4] rounded-lg flex items-center text-[#1C1D28] text-xs text-center justify-center"
          >
            SUBSCRIBE
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
