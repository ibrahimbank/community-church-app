import { useEffect } from "react";
import image from "../../images/sermonImg.png";
// import blogData from "./blogData";
import { getBlogPost, reset } from "../../features/blog/blogPostSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
  const dispatch = useDispatch();

  const { blog, isLoading, isSuccess } = useSelector((state) => state.blog);

  const navigate = useNavigate();
  const { blogId } = useParams();
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess, dispatch]);

  useEffect(() => {
    dispatch(getBlogPost(blogId));
  }, [dispatch]);

  if (isLoading) {
    return <h1>LOADING....</h1>;
  }

  return (
    <div className="bg-[#E5E5E5] max-h-full pb-32">
      <section className="flex flex-col items-center justify-center mb-16 px-28 mt-20 pt-32">
        <h6 className="opacity-75 text-base">OUR BLOG</h6>
        <h2 className="">MOST RECENT POST</h2>
        <div className="flex items-center justify-center px-14 space-x-8 mt-16 border bg-[#ffff]  py-6">
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
      <section className="flex flex-col items-center mt-32 px-28 ">
        <h2 className="mb-16">ALL BLOG POSTS</h2>
        <div className="grid grid-cols-4 gap-x-7 gap-y-10 ">
          {blog.map((data) => (
            <div
              key={data._id}
              className="blog-card flex flex-col cursor-pointer "
            >
              <div className="px-8 py-12 bg-[#ffff]">
                <h6 className="blog-subheading text-sm mb-4">
                  {data.subHeading}
                </h6>
                <h5 className=" font-bold text-lg mb-4">
                  {data.heading.toUpperCase()}
                </h5>
                <p className="opacity-75 mb-12">
                  {data.description.substring(0, 123)}
                </p>

                <div className="">
                  <p className="mb-1">{data.autor}</p>
                  <p className="">{data.date}</p>
                </div>

                <div className="w-full mt-6">
                  <Link
                    to={`/blog/${data._id}`}
                    className=" text-[#000] w-full flex justify-end items-center"
                  >
                    View <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>

              {data[0] && <div className="h-4 w-full bg-[#FFD2A4] -mt-4"></div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
