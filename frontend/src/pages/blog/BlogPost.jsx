import Img1 from "../../images/blogPostImage1.png";
import Img2 from "../../images/blogPostImage2.png";
import { useEffect } from "react";
import { reset, singlePost } from "../../features/blog/blogPostSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function BlogPost() {
  const dispatch = useDispatch();

  const { oneBlog, isLoading } = useSelector((state) => state.blog);

  const { blogId } = useParams();

  useEffect(() => {
    dispatch(singlePost(blogId));
    // dispatch(reset());
  }, [dispatch, blogId]);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
      <section className="flex flex-col px-28 items-center pt-32 mt-20 text-[#000]">
        <p className="real-para mb-2">REALATIONSHP</p>
        <h2 className="mb-2">{oneBlog.subHeading}</h2>
        <div className="flex mb-8 space-x-4">
          <p className="">{oneBlog.date}</p>
          <p className="">{oneBlog.autor}</p>
        </div>
        <img src={Img1} alt="" className="mb-8  " />
      </section>
      <section className="flex flex-col px-80 mb-32 w-130">
        <h2 className="mb-6 ">{oneBlog.heading}</h2>
        <p className="mb-6 opacity-90">
          {oneBlog.description.substring(0, 395)}
        </p>
        <p className="mb-12 opacity-90 ">
          {oneBlog.description.substring(397, 752)}
        </p>
        <img src={Img2} alt="" className="mb-8 mt-6 w-150" />
        <h4 className="font-bold mb-6">{oneBlog.heading2}</h4>
        <p className="opacity-90  mb-6">
          {oneBlog.description.substring(397, 752)}
        </p>

        <blockquote className="opacity-90 mb-8">
          {oneBlog.description.substring(0, 200)}
        </blockquote>
        <p className="opacity-90  mb-6">
          {oneBlog.description.substring(0, 395)}
        </p>
        <h4 className="font-bold mb-6">{oneBlog.heading3}</h4>
        <p className="opacity-90  mb-8">
          {oneBlog.description.substring(1335, 1645)}
        </p>
        <ul className="opacity-90 mb-6 list-disc px-4 ">
          <li className="">{oneBlog.list1}</li>
          <li className="">{oneBlog.list2}</li>
          <li className="">{oneBlog.list3}</li>
        </ul>
        <p className="opacity-90 mb-6">
          {oneBlog.description.substring(0, 395)}
        </p>
        <p className="opacity-90 ">
          {oneBlog.description.substring(2041, 2231)}
        </p>
      </section>
    </>
  );
}

export default BlogPost;
