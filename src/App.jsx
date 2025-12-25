import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import CharacterDesign from "./components/CharacterDesign";
import Illustration from "./components/Illustration";
import About from "./components/About";
import Contact from "./components/Contact";
import { ChevronUp } from "lucide-react";
import Footer from "./components/Footer";
function App() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const isAboutPage = location.pathname === "/about";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/Character-design" element={<CharacterDesign />} />
        <Route path="/Illustration" element={<Illustration />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isAboutPage && (
        <button className="back-to-top" onClick={scrollToTop}>
          <ChevronUp size={18} />
        </button>
      )}
      <Footer />
    </>
  );
}

export default App;
