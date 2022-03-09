import Img1 from "../../images/blogPostImage1.png";
import Img2 from "../../images/blogPostImage2.png";
import { useEffect } from "react";
import { reset, singlePost } from "../../features/blog/blogPostSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function BlogPost() {
  const dispatch = useDispatch();

  const { singleBlog, isLoading } = useSelector((state) => state.blog);

  const { blogId } = useParams();

  useEffect(() => {
    dispatch(singlePost(blogId));
  }, [dispatch, blogId]);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
      <section className="flex flex-col px-28 items-center pt-32 mt-20">
        <p className="real-para mb-2">REALATIONSHP</p>
        <h2 className="mb-2">{singleBlog.subHeading}</h2>
        <div className="flex mb-8 space-x-4">
          <p className="">{singleBlog.date}</p>
          <p className="">{singleBlog.autor}</p>
        </div>
        <img src={Img1} alt="" className="mb-8  " />
      </section>
      <section className="flex flex-col px-80 mb-32 w-130">
        <h2 className="mb-6 ">{singleBlog.heading}</h2>
        <p className="mb-6 opacity-90">{singleBlog.description}</p>
        <p className="mb-12 opacity-90 ">{singleBlog.description}</p>
        <img src={Img2} alt="" className="mb-8 mt-6 w-150" />
        <h4 className="font-bold mb-6">{singleBlog.heading2}</h4>
        <p className="opacity-90  mb-6">{singleBlog.description}</p>

        <blockquote className="opacity-90 mb-8">
          {singleBlog.description}
        </blockquote>
        <p className="opacity-90  mb-10">{singleBlog.description}</p>
        <h4 className="font-bold mb-6">{singleBlog.heading3}</h4>
        <p className="opacity-90  mb-8">{singleBlog.description}</p>
        <ul className="opacity-90 mb-6 list-disc px-4 ">
          <li className="">{singleBlog.list1}</li>
          <li className="">{singleBlog.list2}</li>
          <li className="">{singleBlog.list3}</li>
        </ul>
        <p className="opacity-90 mb-6">{singleBlog.description}</p>
        <p className="opacity-90 ">{singleBlog.description}</p>
      </section>
    </>
  );
}

export default BlogPost;
