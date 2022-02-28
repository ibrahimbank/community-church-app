import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function ContactForm() {
  return (
    <section className="flex items-center py-32 px-28 space-x-20">
      <div className="">
        <h5 className="mb-8 font-bold text-lg">CONTACT FORM:</h5>
        <form action="" className="flex flex-col w-144 ">
          <input
            type="text"
            name="FullName"
            placeholder="Your FullName"
            className="form-input mb-3 "
          />
          <input
            type="text"
            name="Email"
            placeholder="Your Email"
            className="form-input mb-3"
          />
          <input
            type="text"
            name="Query"
            placeholder="Query Related"
            className="form-input mb-3"
          />
          <textarea
            name=""
            placeholder="Message"
            className="form-input-message pt-5"
            id=""
          ></textarea>
          <button
            className="btn bg-[#FFD2A4] mt-3 rounded-lg text-sm "
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className="w-64">
        <div className="mb-8 w-60">
          <p className="opacity-75 text-sm mb-2">Address</p>
          <h5 className="font-bold text-lg">
            NH 234 PUBLIC SQUARE SAN FRANCISCO 65368
          </h5>
        </div>
        <div className="mb-8 w-60">
          <p className="opacity-75 text-sm mb-2">Contact Details </p>
          <h5 className="font-bold text-lg mb-2">(480) 555-0103</h5>
          <h5 className="font-bold text-lg">FINSWEET@EXAMPLE.COM</h5>
        </div>
        <div className="">
          <p className="opacity-75 text-sm mb-2">Find us here</p>
          <div className="flex space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
