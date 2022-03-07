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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
