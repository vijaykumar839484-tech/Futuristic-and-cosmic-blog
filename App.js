import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CosmicBlog from "./CosmicBlog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <nav className="flex justify-center space-x-6 p-4 bg-gray-800 shadow-md">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CosmicBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}
