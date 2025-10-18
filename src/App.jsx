import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import CustomerComments from "./components/CustomerComments";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-950 to-slate-950">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-40 h-40 -mt-50" />

        {/* Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-30 h-30 border-4 border-purple-900 border-t-purple-500 rounded-full animate-spin"></div>
          <div className="absolute w-22 h-22 border-4 border-purple-800 border-t-transparent rounded-full animate-spin [animation-duration:3s]"></div>
        </div>
      </div>
    );

  return (
    <div className="bg-linear-to-b from-purple-950 to-slate-950 min-h-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Home />
        <BackToTop />
        <Features />
        <Pricing />
        <CustomerComments />
        <Contact />
        <Blog />
        <Footer />

        <br />
        <br />
        <br />
      </BrowserRouter>
    </div>
  );
}

export default App;
