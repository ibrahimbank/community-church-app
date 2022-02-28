import React from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

function ContactUs() {
  return (
    <div className="bg-[#E5E5E5]">
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactUs;
