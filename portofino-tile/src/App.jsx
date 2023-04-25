import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import BathRemodel from "./components/BathRemodel.jsx";
import Reviews from "./components/Reviews.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <div className="container">
      
      <Router>
        <nav className="navLinks">
          {/* <a href="tel:+7812210334" className="tapToCall"></a> */}
          <div className="imageContainer">
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/BathRemodel">Bath Remodeling</Link>
            </li>
            <li>
              <Link to="/Reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/BeforeAndAfter">Before & After</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="routeContainer">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/BathRemodel" element={<BathRemodel />} />
            <Route path="/Reviews" element={<Reviews/>}/>
            <Route path="/BeforeAndAfter" element={<BeforeAfter/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
