import React from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import image from "../../images/sermonImg.png";
import blogData from "./blogData";

function Blog() {
  return (
    <div className="bg-[#E5E5E5]">
      <Navbar />
      <section className="flex flex-col items-center justify-center mb-16 px-28 mt-20 pt-32">
        <h6 className="opacity-75 text-base">OUR BLOG</h6>
        <h2 className="">MOST RECENT POST</h2>
        <div className="flex items-center justify-center px-14 space-x-8 mt-16 border bg-[#ffff] px-6 py-6">
          <img src={image} alt="members" className="w-1/2 h-80" />
          <div className="flex flex-col pt-4  w-1/2">
            <div className="flex space-x-24">
              <p className="opacity-70 font-normal leading-3">
                TUESDAY 13 MAY, 2022
              </p>
              <p className=" opacity-70  font-normal leading-3">
                BY JOHN HUNAU DEO
              </p>
            </div>
            <div className="">
              <h4 className="mb-4 mt-3 font-bold text-lg w-128 ">
                CHURCH WAS DOING WHAT HE OFTEN DID WHEN DROPPED AN ORACLE
              </h4>
              <p className=" mb-8 opacity-75 w-11/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
              <button className="btn w-40 rounded-lg bg-[#FFD2A4]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-32 mb-32 px-28 ">
        <h2 className="mb-16">ALL BLOG POSTS</h2>
        <div className="grid grid-cols-4 gap-x-7 gap-y-10 ">
          {blogData.map((data) => (
            <div
              key={data.id}
              className="blog-card flex flex-col px-8 py-12 bg-[#ffff]"
            >
              <h6 className="blog-subheading text-sm mb-4">
                {data.subHeading}
              </h6>
              <h5 className=" font-bold text-lg mb-4">
                {data.heading.toUpperCase()}
              </h5>
              <p className="opacity-75 mb-12">{data.description}</p>

              <div className="">
                <p className="mb-1">{data.autor}</p>
                <p className="">{data.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
