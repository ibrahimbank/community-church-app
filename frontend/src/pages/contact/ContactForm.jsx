import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import { createMessage, reset } from "../../features/contact/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    queryRelated: "",
    contactMessage: "",
  });

  const { fullName, email, queryRelated, contactMessage } = formData;

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.contact
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      console.log("success");
      toast.success("Register Successfully, see you at the event");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, message]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      fullName === "" ||
      email === "" ||
      queryRelated === "" ||
      contactMessage === ""
    ) {
      toast.error("Please fill all input in the form");
    } else {
      const contactData = {
        fullName,
        email,
        queryRelated,
        contactMessage,
      };

      dispatch(createMessage(contactData));
    }
  };

  if (isLoading) {
    return <h1>LOADING....</h1>;
  }

  return (
    <section className="flex items-center py-32 px-28 space-x-20">
      <div className="">
        <h5 className="mb-8 font-bold text-lg">CONTACT FORM:</h5>
        <form action="" className="flex flex-col w-144 ">
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            placeholder="Your FullName"
            className="form-input mb-3 "
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Your Email"
            className="form-input mb-3"
            id="email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="queryRelated"
            value={queryRelated}
            placeholder="Query Related"
            className="form-input mb-3"
            id="queryRelated"
            onChange={handleChange}
          />
          <textarea
            name="contactMessage"
            value={contactMessage}
            placeholder="Message"
            className="form-input-message pt-5"
            id="contactMessage"
            onChange={handleChange}
          ></textarea>
          <button
            className="btn bg-[#FFD2A4] mt-3 rounded-lg text-sm "
            type="submit"
            onClick={onSubmit}
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
