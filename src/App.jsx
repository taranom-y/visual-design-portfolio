import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import CharacterDesign from "./components/CharacterDesign";
import Illustration from "./components/Illustration";
import About from "./components/About";
import { ChevronUp } from "lucide-react";
import Footer from "./components/Footer";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector("nav");
      nav.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/Character-design" element={<CharacterDesign />} />
          <Route path="/Illustration" element={<Illustration />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {!isAboutPage && (
          <button className="back-to-top" onClick={scrollToTop}>
            <ChevronUp size={18} />
          </button>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
