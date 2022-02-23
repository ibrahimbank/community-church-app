import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUS/>}/>
        <Route path="/sermon" element={<Sermon/>}/>
        <Route path="/" element={<Blog/>}/> 
        <Route path="/contact-us" element={<ContactUS/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
