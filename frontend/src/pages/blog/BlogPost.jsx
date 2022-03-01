import React from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import Img1 from "../../images/blogPostImage1.png";
import Img2 from "../../images/blogPostImage2.png";

function BlogPost() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col px-28 items-center pt-32 mt-20">
        <p className="real-para mb-2">REALATIONSHP</p>
        <h2 className="mb-2">HOW TO SHOW COMPASSION</h2>
        <div className="flex mb-8 space-x-4">
          <p className="">13 May, 2018</p>
          <p className="">By Mathew Johnson</p>
        </div>
        <img src={Img1} alt="" className="mb-8  " />
      </section>
      <section className="flex flex-col px-80 mb-32 w-130">
        <h2 className="mb-6 ">LOREM IPSUM DOLOR SIT AMET</h2>
        <p className="mb-6 opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.
        </p>
        <p className="mb-12 opacity-90 ">
          Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta
          lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus
          ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna
          duis convallis convallis tellus id. Feugiat pretium nibh ipsum
          consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet
          porttitor eget.
        </p>
        <img src={Img2} alt="" className="mb-8 mt-6 w-150" />
        <h4 className="font-bold mb-6">LOREM IPSUM DOLOR SIT AMET</h4>
        <p className="opacity-90  mb-6">
          Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta
          lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus
          ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna
          duis convallis convallis tellus id. Feugiat pretium nibh ipsum
          consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet
          porttitor eget.
        </p>

        <blockquote className="opacity-90 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          faucibus in ornare quam viverra orci sagittis eu volutpat.
        </blockquote>
        <p className="opacity-90  mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.
        </p>
        <h4 className="font-bold mb-6">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </h4>
        <p className="opacity-90  mb-8">
          We both celebrate and challenge the culture around us as we orient our
          lives around Jesus. We want to serve the world around us. It’s why we
          support mission work all across the globe Regardless of what your next
          step in faith is, we want to help you take that next step Our church
          is10% of our annual income to
        </p>
        <ul className="opacity-90 mb-6 list-disc px-4 ">
          <li className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </li>
          <li className="">Purus sit amet luctus venenatis lectus magna</li>
          <li className="">
            Aenean vel elit scelerisque mauris. Imperdiet sed euismod{" "}
          </li>
        </ul>
        <p className="opacity-90 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.
        </p>
        <p className="opacity-90 ">
          Saepe magni aut maxime vel voluptatem. Ab eveniet neque placeat qui
          porro ab minus voluptas. Dicta praesentium neque vero mollitia aperiam
          sed enim. Lacinia quis vel eros donec ac odio.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default BlogPost;
