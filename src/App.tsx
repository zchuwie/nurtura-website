import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import About from "./pages/About";
import Technology from "./pages/Technology";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f9f9f4]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
