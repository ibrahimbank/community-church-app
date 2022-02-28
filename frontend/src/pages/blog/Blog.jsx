import React from "react";
import Footer from "../../common/Footer";
import image from "../../images/sermonImg.png";

function Blog() {
  return (
    <>
      <section className="flex flex-col items-center justify-center mb-16 mt-4 px-28">
        <h6 className="">OUR BLOG</h6>
        <h2 className="">MOST RECENT POST</h2>
        <div className="flex items-center justify-center px-14 space-x-8">
          <img src="" alt={image} className="" />
          <div className="flex flex-col">
            <div className="">
              <p className="">TUESDAY 13 MAY, 2022</p>
              <p className="">BY JOHN HUNAU DEO</p>
              <div className="">
                <h4 className="mb-4 mt-3">
                  CHURCH WAS DOING WHAT HE OFTEN DID WHEN DROPPED AN ORACLE
                </h4>
                <p className=" mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
                <button className="btn w-40 bg-[#FFD2A4]">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
