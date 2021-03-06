import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about/AboutUs";
import Sermon from "./pages/sermon/Sermon";
import Blog from "./pages/blog/Blog";
import ContactUs from "./pages/contact/ContactUs";
import SermonEvent from "./pages/sermon/SermonEvent";
import BlogPost from "./pages/blog/BlogPost";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sermon" element={<Sermon />} />
          <Route path="/sermon-events" element={<SermonEvent />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogPost />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
